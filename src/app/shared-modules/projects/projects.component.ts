import {Component, Input, OnInit} from '@angular/core';
import {ProjectInterface} from '../../shared/interfaces/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: ProjectInterface[];
  @Input() isProjectsExcerpt = false;
  @Input() pageTitle = 'Projects';

  constructor() {
  }

  ngOnInit() {
  }
}
