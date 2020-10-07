import {Component, OnInit} from '@angular/core';
import {ProjectInterface} from '../../shared/interfaces/project.interface';
import ProjectsExcerptJson from '../../../assets/data/projects-excerpt.json';

@Component({
  selector: 'app-last-projects',
  templateUrl: './last-projects.component.html',
  styleUrls: ['./last-projects.component.scss']
})
export class LastProjectsComponent implements OnInit {
  projectsExcerpt: ProjectInterface[];

  constructor() {
  }

  ngOnInit() {
    this.projectsExcerpt = [...ProjectsExcerptJson];
  }
}
