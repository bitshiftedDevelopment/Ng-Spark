import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthService } from '@app/auth/auth.service';
import { User } from '@app/auth/user';
import { Post, PostMetadata } from '../post';

// This is a good way to add an id to an imported interface
interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'blog-post-upload-form',
  templateUrl: './post-upload-form.component.html',
  styleUrls: ['./post-upload-form.component.scss']
})
export class PostUploadFormComponent implements OnInit {
  postDoc: AngularFirestoreDocument<Post>; // Currently viewed document
  post: Observable<Post>; // Viewed document as the given interface ("Post")
  postsCol: AngularFirestoreCollection<Post>; // collection of documents returned from firestore
  posts: any; // Actual array of documents contained within the collection
  title: string; // Post title
  author: string; // Post author
  content: string; // Post body
  metadata: PostMetadata; // Metadata stored in post
  constructor(private afs: AngularFirestore, public auth: AuthService) { }

  ngOnInit() {
  }

  // Adds a document to the collection using the passed in object
  addPost() { //TODO rework this to accept a prebuilt object instead
    this.createMetadata()
    this.afs.collection('posts').add(
      {
        'title': this.title,
        'author': this.auth.getUserName(),
        'content': this.content,
        'metadata': this.metadata
      });
  }

  createMetadata() {
    const data: PostMetadata = {
      'postDate': Date.now().toString(),
      'published': false,
      'subsOnly': false
    }
    this.metadata = data
  }

}
