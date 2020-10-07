import {Component, OnInit} from '@angular/core';
import TechnologiesJson from '../../../assets/data/technologies.json';
import {Technology} from '../../shared/interfaces/technology';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  technologies: Technology[];
  showTechnologiesCount = 12;

  constructor() {
  }

  ngOnInit() {
    this.technologies = [...TechnologiesJson];
  }

  showAllTechnologies() {
    this.showTechnologiesCount = this.technologies.length;
  }
}
