import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './material/material.module';
import {SiteLayoutComponent} from './layouts/site-layout/site-layout.component';
import {HeaderComponent} from './layouts/site-layout/header/header.component';

@NgModule({
  declarations: [
    SiteLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule {
}
