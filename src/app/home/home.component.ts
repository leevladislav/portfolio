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
        'CSS/SCSS (SMACSS)',
        'JS/JQuery',
        'Gulp 4',
      ],
      link: 'https://bodesstudio.com',
    },
    {
      title: 'Groove-Avenue (in progress)',
      subtitle: 'Original Sneaker Store',
      image: 'groove-avenue.jpeg',
      tools: [
        'Angular 9',
        'Typescript',
        'Rx.js, Moment.js',
        'HTML5',
        'CSS/SCSS (SMACSS)',
        'Webpack 4',
      ],
      link: 'http://groove-avenue.com',
    },
    {
      title: 'CRM For Small Business',
      subtitle: 'Manage your business on this app',
      image: 'admin-groove-avenue.jpg',
      tools: [
        'Angular 8',
        'Typescript, Rx.js',
        'Node.js',
        'Express, MongoDB',
        'HTML5',
        'CSS/SCSS (SMACSS)',
        'Webpack 4',
      ],
      link: 'http://admin.groove-avenue.com',
    },
    {
      title: 'The Word of the Day',
      subtitle: 'Translator with images - owl.bot.api',
      image: 'word-of-the-day.jpeg',
      tools: [
        'Angular 9, PWA',
        'Typescript',
        'HTML5',
        'CSS/SCSS (SMACSS)',
        'Webpack 4',
      ],
      link: 'http://word.leevladislav.com',
    },
    {
      title: 'Marsala',
      subtitle: 'The small project to improve my skills',
      image: 'marsala.jpeg',
      tools: [
        'HTML5',
        'CSS/SCSS (SMACSS)',
        'JS/JQuery',
        'Gulp 4',
      ],
      link: 'assets/projects/marsala/index.html',
    },
    {
      title: 'Blue',
      subtitle: 'The small project to improve my skills',
      image: 'blue.jpeg',
      tools: [
        'HTML5',
        'CSS/SCSS (SMACSS)',
        'JS/JQuery',
        'Gulp 4',
      ],
      link: 'assets/projects/blue/index.html',
    },
    {
      title: 'Kate Stanford',
      subtitle: 'The small project to improve my skills',
      image: 'kate-stanford.jpeg',
      tools: [
        'HTML5',
        'CSS/SCSS (SMACSS)',
        'JS/JQuery',
        'Bootstrap 4'
      ],
      link: 'assets/projects/kate-stanford/index.html',
    },
    {
      title: 'Cuda template',
      subtitle: 'The small project to improve my skills',
      image: 'cuda.jpeg',
      tools: [
        'HTML5',
        'CSS/SCSS (SMACSS)',
        'JS/JQuery',
        'Gulp 4',
      ],
      link: 'assets/projects/cuda/dist/index.html',
    },
    {
      title: 'Solid',
      subtitle: 'The small project to improve my skills',
      image: 'solid.jpeg',
      tools: [
        'HTML5',
        'CSS/SCSS (SMACSS)',
        'JS/JQuery',
        'Gulp 4',
      ],
      link: 'assets/projects/solid/index.html',
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
