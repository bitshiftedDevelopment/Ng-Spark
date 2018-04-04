import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from '@app/auth/auth.service';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent implements OnInit {
  @Input() post: Observable<Post>;// Used for injecting a post in the post-browser
  constructor(private afs: AngularFirestore, public auth: AuthService, private route: ActivatedRoute, ) {
    // this.route.paramMap.subscribe(params => {
    //   this.name = params.get('id')
    // });
  }

  ngOnInit() {
    //this.postsCol = this.afs.collection('posts'); // Fill the collection with the named value

    // this.postsCollection = this.afs.collection<Post>('posts', ref => {
    //   return ref.where('name', '==', this.name);
    // });
    // this.items = this.itemCollection.valueChanges();
    // this.items.subscribe(data => {
    //   console.log(data)
    //   this.post = data
    // })
    this.route.params.subscribe(params => {
      // Sets the current post. Cast the return to prevent typecasting errors
      this.post = this.afs.doc('posts/' + params['id']).valueChanges() as Observable<Post>
    });
  }

}
