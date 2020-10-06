import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {HomePageRoutingModule} from './home-page.routing.module';
import {SharedModule} from '../shared/shared.module';
import {HeroComponent} from './hero/hero.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomePageRoutingModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule {
}
