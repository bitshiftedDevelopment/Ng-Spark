import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';
@Component({
  selector: 'login-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
