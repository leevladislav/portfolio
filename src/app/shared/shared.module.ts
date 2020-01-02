import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {TechnologySliderComponent} from './technology-slider/technology-slider.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TechnologySliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    TechnologySliderComponent
  ]
})
export class SharedModule {
}
