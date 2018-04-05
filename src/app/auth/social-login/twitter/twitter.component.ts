import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';
@Component({
  selector: 'login-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
