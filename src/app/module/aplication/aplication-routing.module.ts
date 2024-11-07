import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicationComponent } from './aplication.component';
import { ExtractComponent } from './extract/extract.component';

const routes: Routes = [
  {
    path:'',
    component: AplicationComponent
  },
  {
    path:'extract',
    component: ExtractComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicationRoutingModule { }
