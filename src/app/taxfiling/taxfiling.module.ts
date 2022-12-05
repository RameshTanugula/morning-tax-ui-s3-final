import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxfilingRoutingModule } from './taxfiling-routing.module';
import { TaxfilingComponent } from './taxfiling.component';


@NgModule({
  declarations: [
    TaxfilingComponent
  ],
  imports: [
    CommonModule,
    TaxfilingRoutingModule
  ]
})
export class TaxfilingModule { }
