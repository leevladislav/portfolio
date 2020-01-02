import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  technologies = [
    {
      title: 'HTML 5',
      path: '/assets/images/technology/html.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
