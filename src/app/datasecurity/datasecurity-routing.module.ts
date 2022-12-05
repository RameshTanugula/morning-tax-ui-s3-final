import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatasecurityComponent } from './datasecurity.component';

const routes: Routes = [{ path: '', component: DatasecurityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatasecurityRoutingModule { }
