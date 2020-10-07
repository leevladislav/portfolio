import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {HomePageRoutingModule} from './home-page.routing.module';
import {SharedModule} from '../shared/shared.module';
import {HeroComponent} from './hero/hero.component';
import {LastProjectsComponent} from './last-projects/last-projects.component';
import {ProjectsModule} from '../shared-modules/projects/projects.module';


@NgModule({
  declarations: [
    HomePageComponent,
    HeroComponent,
    LastProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomePageRoutingModule,
    ProjectsModule
  ]
})
export class HomePageModule {
}
