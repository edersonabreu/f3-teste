import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicationComponent } from './module/aplication/aplication.component';
import { ExtractComponent } from './module/aplication/extract/extract.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
