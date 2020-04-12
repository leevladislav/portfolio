import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  technologies = [
    {
      title: 'HTML5',
      path: '/assets/images/technology/html.png'
    },
    {
      title: 'CSS3',
      path: '/assets/images/technology/css.png'
    },
    {
      title: 'JavaScript',
      path: '/assets/images/technology/javascript.png'
    },
    {
      title: 'JavaScript(ES6)',
      path: '/assets/images/technology/es6.png'
    },
    {
      title: 'GIT',
      path: '/assets/images/technology/git.png'
    },
    {
      title: 'GitHub',
      path: '/assets/images/technology/github.png'
    },
    {
      title: 'BitBucket',
      path: '/assets/images/technology/bitbucket.png'
    },
    {
      title: 'Bower',
      path: '/assets/images/technology/bower.png'
    },
    {
      title: 'Bootstrap',
      path: '/assets/images/technology/bootstrap.png'
    },
    {
      title: 'Visual Studio Code',
      path: '/assets/images/technology/vscode.png'
    },
    {
      title: 'PHPStorm',
      path: '/assets/images/technology/phpstorm.png'
    },
  ];

  constructor() {

  }

  ngOnInit() {
  }
}
