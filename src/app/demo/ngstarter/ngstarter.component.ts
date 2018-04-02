import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';
@Component({
  selector: 'demo-ngstarter',
  templateUrl: './ngstarter.component.html',
  styleUrls: ['./ngstarter.component.scss']
})
export class NgstarterComponent implements OnInit {
  title = 'app';
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
