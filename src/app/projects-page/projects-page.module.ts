import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsPageComponent} from './projects-page.component';
import {SharedModule} from '../shared/shared.module';
import {ProjectsPageRoutingModule} from './projects-page.routing.module';
import {ProjectsModule} from '../shared-modules/projects/projects.module';

@NgModule({
  declarations: [
    ProjectsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsPageRoutingModule,
    ProjectsModule
  ]
})
export class ProjectsPageModule {
}
