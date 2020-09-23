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
      title: 'JQuery',
      path: '/assets/images/technology/jquery.png'
    },
    {
      title: 'Lodash',
      path: '/assets/images/technology/lodash.png'
    },
    {
      title: 'Socket.io',
      path: '/assets/images/technology/socket.io.png'
    },
    {
      title: 'JSON',
      path: '/assets/images/technology/json.png'
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
      title: 'MongoDB',
      path: '/assets/images/technology/mongodb.png'
    },

    {
      title: 'npm',
      path: '/assets/images/technology/npm.png'
    },
    {
      title: 'Webpack',
      path: '/assets/images/technology/webpack.png'
    },
    {
      title: 'Bower',
      path: '/assets/images/technology/bower.png'
    },
    {
      title: 'Gulp',
      path: '/assets/images/technology/gulp.png'
    },

    {
      title: 'Bootstrap',
      path: '/assets/images/technology/bootstrap.png'
    },
    {
      title: 'Less',
      path: '/assets/images/technology/less.png'
    },
    {
      title: 'Sass',
      path: '/assets/images/technology/sass.png'
    },

    {
      title: 'Heroku',
      path: '/assets/images/technology/heroku.png'
    },

    {
      title: 'Docker',
      path: '/assets/images/technology/docker.png'
    },
  ];

  // TODO: REST API
  // TODO: TypeScript
  // TODO: Material-UI
  // TODO: Wordpress
  // TODO: Angular
  // TODO: Node.js
  // TODO: Ajax
  // TODO: Figma
  // TODO: Photoshop
  // TODO: Illustrator

  constructor() {

  }

  ngOnInit() {
  }
}
