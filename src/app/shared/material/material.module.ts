import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports: [
    MatCardModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
