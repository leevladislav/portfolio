import {Component, OnInit} from '@angular/core';
import TechnologiesJson from '../../../assets/data/technologies.json';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  technologies: { title: string, iconName: string, isHorizontal?: boolean }[];

  constructor() {
  }

  ngOnInit() {
    this.technologies = [...TechnologiesJson];
  }
}
