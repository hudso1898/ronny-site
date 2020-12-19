import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  appear: boolean = false;
  ngOnInit() {
    setTimeout(() => {
      this.appear = true;
    }, 3500);
  }

}
