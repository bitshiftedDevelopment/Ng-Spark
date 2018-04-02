import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from '@app/auth/auth.service';
import { Article } from '../article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blog-articlecard',
  templateUrl: './articlecard.component.html',
  styleUrls: ['./articlecard.component.scss']
})
export class ArticlecardComponent implements OnInit {
  @Input() article: Article;// Used for injecting a post in the post-browser
  constructor(private afs: AngularFirestore, public auth: AuthService, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.article = this.afs.doc('articles/' + params['id']).valueChanges()
    });
  }

}
