import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicationComponent } from './module/aplication/aplication.component';
import { ExtractComponent } from './module/aplication/extract/extract.component';
import { MonthlyContributionComponent } from './module/aplication/monthly-contribution/monthly-contribution.component';
import { InformationComponent } from './module/aplication/information/information.component';

const routes: Routes = [

  {
    path: '', 
    pathMatch: 'full',
    loadChildren: () => import('./module/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./module/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./module/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  // {
  //   path: '**',
  //   redirectTo: 'login' 
  // },
  {
    path: 'aplication',
    component: AplicationComponent,
    children: [
      { path: 'extract', component: ExtractComponent },
      { path: 'monthly_contribution', component: MonthlyContributionComponent },
      { path: 'information', component: InformationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
