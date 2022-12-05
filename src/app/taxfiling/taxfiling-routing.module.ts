import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxfilingComponent } from './taxfiling.component';

const routes: Routes = [{ path: '', component: TaxfilingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxfilingRoutingModule { }
