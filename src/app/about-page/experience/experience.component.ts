import {Component, OnInit} from '@angular/core';
import ExperienceJson from '../../../assets/data/experience.json';
import {ExperienceInterface} from '../../shared/interfaces/experience.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: ExperienceInterface[];

  constructor() {
  }

  ngOnInit() {
    this.experience = [...ExperienceJson];
  }
}
