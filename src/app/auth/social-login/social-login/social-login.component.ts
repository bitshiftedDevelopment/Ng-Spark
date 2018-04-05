import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';
@Component({
  selector: 'social-login-block',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
