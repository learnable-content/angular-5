import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  title: string;
  subTitle: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Thank you, Developer';
    this.subTitle = 'But our Princess is in another lesson!';
  }

}
