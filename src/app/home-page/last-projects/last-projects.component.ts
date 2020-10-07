import {Component, OnInit} from '@angular/core';
import {Project} from '../../shared/interfaces/project';
import ProjectsExcerptJson from '../../../assets/data/projects-excerpt.json';

@Component({
  selector: 'app-last-projects',
  templateUrl: './last-projects.component.html',
  styleUrls: ['./last-projects.component.scss']
})
export class LastProjectsComponent implements OnInit {
  projectsExcerpt: Project[];

  constructor() {
  }

  ngOnInit() {
    this.projectsExcerpt = [...ProjectsExcerptJson];
  }
}
