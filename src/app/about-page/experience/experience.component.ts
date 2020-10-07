import {Component, OnInit} from '@angular/core';
import ExperienceJson from '../../../assets/data/experience.json';
import {Experience} from '../../shared/interfaces/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[];

  constructor() {
  }

  ngOnInit() {
    this.experience = [...ExperienceJson];
  }
}
