import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';
@Component({
  selector: 'login-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
