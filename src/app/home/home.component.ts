import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: any = [
    {
      title: 'Piroll-Design',
      subtitle: 'The lite project to improve my skills',
      image: 'Piroll-Design.jpeg',
      tools: [
        'HTML5',
        'CSS/SCSS',
        'SMACSS',
        'JS/JQuery',
        'Bootstrap 4',
        'Gulp 4',
      ],
      link: 'assets/projects/Piroll-Design-master/index.html',
    },
    {
      title: 'Cuda template',
      subtitle: 'The lite project to improve my skills',
      image: 'Cuda.jpeg',
      tools: [
        'HTML5',
        'CSS/SCSS',
        'SMACSS',
        'JS/JQuery',
        'Gulp 4',
      ],
      link: 'assets/projects/cuda-master/dist/index.html',
    },
    {
      title: 'Codepen',
      subtitle: 'My dashboard and profile',
      image: 'Codepen.jpeg',
      link: 'https://codepen.io/vladislavlee/',
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
