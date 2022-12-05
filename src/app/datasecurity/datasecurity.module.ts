import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatasecurityRoutingModule } from './datasecurity-routing.module';
import { DatasecurityComponent } from './datasecurity.component';


@NgModule({
  declarations: [
    DatasecurityComponent
  ],
  imports: [
    CommonModule,
    DatasecurityRoutingModule
  ]
})
export class DatasecurityModule { }
