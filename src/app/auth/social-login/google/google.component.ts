import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';
@Component({
  selector: 'login-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
