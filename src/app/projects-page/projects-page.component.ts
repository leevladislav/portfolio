import {Component, OnInit} from '@angular/core';
import ProjectsAllJson from '../../assets/data/projects-all.json';
import {ProjectInterface} from '../shared/interfaces/project.interface';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  projectsAll: ProjectInterface[];

  constructor() {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.projectsAll = [...ProjectsAllJson];
  }
}
