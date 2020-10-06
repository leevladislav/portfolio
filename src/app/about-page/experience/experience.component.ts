import {Component, OnInit} from '@angular/core';
import ExperienceJson from '../../../assets/data/experience.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: {
    from: string,
    to: string,
    position: string,
    company: string,
    duties: string
  }[];

  constructor() {
  }

  ngOnInit() {
    this.experience = [...ExperienceJson];
  }
}
