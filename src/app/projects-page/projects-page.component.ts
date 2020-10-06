import {Component, OnInit} from '@angular/core';
import ProjectsAllJson from '../../assets/data/projects-all.json';
import {Project} from '../shared/interfaces/project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  projectsAll: Project[];

  constructor() {
  }

  ngOnInit() {
    this.projectsAll = [...ProjectsAllJson];
  }
}
