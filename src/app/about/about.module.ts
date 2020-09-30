import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {SharedModule} from '../shared/shared.module';
import {AboutRoutingModule} from './about.routing.module';
import {TechnologyComponent} from './technology/technology.component';


@NgModule({
    declarations: [
      AboutComponent,
      TechnologyComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AboutRoutingModule
    ]
})
export class AboutModule {
}
