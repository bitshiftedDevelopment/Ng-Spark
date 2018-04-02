import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthService } from '@app/auth/auth.service';
import { Article, ArticleMetadata } from '../article';

// Used for searching
import { Subject } from 'rxjs/Subject';

// This is a good way to add an id to an imported interface
interface ArticleId extends Article {
  id: string;
}
@Component({
  selector: 'blog-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.scss']
})
export class ArticlelistComponent implements OnInit {
  articleDoc: AngularFirestoreDocument<Article>; // Currently viewed document
  article: Observable<Article>; // Viewed document as the given interface ("Post")
  articlesCol: AngularFirestoreCollection<Article>; // collection of documents returned from firestore
  articles: any; // Actual array of documents contained within the collection
  title: string; // Should be replaced by some manner of input
  content: string; // Should be replaced by some manner of input
  author: string;
  metadata: ArticleMetadata;
  constructor(private afs: AngularFirestore, public auth: AuthService) { }

  ngOnInit() {
    this.articlesCol = this.afs.collection('articles'); // Fill the collection with the named value
    // The below line can be used to filter documents in the collection by the passed value ("coursetro")
    //this.articlesCol = this.afs.collection('articales', ref => ref.where('title', '==', 'coursetro'));
    this.articles = this.articlesCol.snapshotChanges() // Fill in the posts array with live firestore contents
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Article;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }

  // Adds a document to the collection using the passed in object
  addArticle() { //TODO rework this to accept a prebuilt object instead
    //this.author = this.auth.user.displayName
    console.log(this.author)
    this.afs.collection('articles').add({
      'title': this.title,
      'author': this.author,
      'content': this.content,
      'metadata': this.metadata || {
        'postDate': Date.now(),
        'published': false,
        'subsOnly': false
      }
    });
  }

  // Adds a document with the given uid to the collection using the passed in object
  //TODO rework this to accept a prebuilt object instead
  // addPost() {
  //   this.afs.collection('posts').doc('my-custom-id').set({ 'title': this.title, 'content': this.content });
  // }

  // Returns a document from a collection by uid
  getArticle(articleId) {
    this.articleDoc = this.afs.doc('articles/' + articleId);
    this.article = this.articleDoc.valueChanges();
  }

  // Removes a document from the given collection by uid
  deleteArticle(articleId) {
    this.afs.doc('articles/' + articleId).delete();
  }
}
