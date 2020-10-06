import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutPageComponent} from './about-page.component';
import {SharedModule} from '../shared/shared.module';
import {AboutPageRoutingModule} from './about-page.routing.module';
import {TechnologyComponent} from './technology/technology.component';
import {ExperienceComponent} from './experience/experience.component';
import {InfoComponent} from './info/info.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    TechnologyComponent,
    ExperienceComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AboutPageRoutingModule
  ]
})
export class AboutPageModule {
}
