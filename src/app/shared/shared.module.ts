import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {TechnologyComponent} from './technology/technology.component';
import {MaterialModule} from './material/material.module'

@NgModule({
  declarations: [
    HeaderComponent,
    TechnologyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    TechnologyComponent,
    MaterialModule
  ]
})
export class SharedModule {
}
