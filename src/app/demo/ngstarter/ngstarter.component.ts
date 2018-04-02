import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-ngstarter',
  templateUrl: './ngstarter.component.html',
  styleUrls: ['./ngstarter.component.scss']
})
export class NgstarterComponent implements OnInit {
  title = 'app';
  constructor() { }

  ngOnInit() {
  }

}
