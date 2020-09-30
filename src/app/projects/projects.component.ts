import {Component, OnInit} from '@angular/core';
import ProjectsJson from '../../assets/data/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: {
    title: string,
    subtitle: string,
    image: string
    tools?: string[],
    link: string
  }[];

  constructor() {
  }

  ngOnInit() {
    this.projects = [...ProjectsJson];
  }

}
