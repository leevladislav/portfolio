import {Component, OnInit} from '@angular/core';
import TechnologiesJson from '../../../assets/data/technologies.json';
import {TechnologyInterface} from '../../shared/interfaces/technology.interface';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  technologies: TechnologyInterface[];
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
