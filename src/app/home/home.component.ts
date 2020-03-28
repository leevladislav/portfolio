import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: any = [
    {
      title: 'Bodes Studio',
      subtitle: 'Apartment design project remotely',
      image: 'bodesstudio.jpeg',
      tools: [
        'Wordpress',
        'Own Theme + Multilang',
        'HTML5',
        'SCSS',
        'SMACSS',
        'JS/JQuery',
        'Gulp 4',
      ],
      link: 'https://bodesstudio.com',
    },
    {
      title: 'CRM For Small Business',
      subtitle: 'Manage your business on this app',
      image: 'admin-groove-avenue.jpeg',
      tools: [
        'Angular 8',
        'Typescript',
        'Node.js',
        'Express',
        'MongoDB',
        'HTML5',
        'CSS/SCSS',
        'SMACSS',
        'Webpack 4',
      ],
      link: 'http://admin.groove-avenue.com',
    },
    {
      title: 'The Word of the Day',
      subtitle: 'The small project to improve my skills',
      image: 'word-of-the-day.png',
      tools: [
        'Angular 8',
        'Typescript',
        'PWA',
        'HTML5',
        'CSS/SCSS',
        'SMACSS',
        'Webpack 4',
      ],
      link: 'https://github.com/leevladislav/word-culture',
    },
    {
      title: 'Piroll-Design',
      subtitle: 'The small project to improve my skills',
      image: 'piroll-design.jpeg',
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
      subtitle: 'The small project to improve my skills',
      image: 'cuda.jpeg',
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
      title: 'Codepen Dashboard',
      subtitle: 'My dashboard and profile',
      image: 'codepen.jpeg',
      link: 'https://codepen.io/vladislavlee/',
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
