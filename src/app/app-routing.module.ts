import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicationComponent } from './module/aplication/aplication.component';
import { ExtractComponent } from './module/aplication/extract/extract.component';
import { MonthlyContributionComponent } from './module/aplication/monthly-contribution/monthly-contribution.component';
import { InformationComponent } from './module/aplication/information/information.component';
import { DocumentsComponent } from './module/aplication/documents/documents.component';
import { RequestBenefitComponent } from './module/aplication/request-benefit/request-benefit.component';
import { RegressiveExtractComponent } from './module/aplication/regressive-extract/regressive-extract.component';
import { TaxationRegimeComponent } from './module/aplication/taxation-regime/taxation-regime.component';
import { ExtraContributionComponent } from './module/aplication/extra-contribution/extra-contribution.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./module/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./module/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: 'aplication',
    component: AplicationComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'extract', pathMatch: 'full' },
      { path: 'extract', component: ExtractComponent },
      { path: 'monthly-contribution', component: MonthlyContributionComponent },
      { path: 'information', component: InformationComponent },
      { path: 'documents', component: DocumentsComponent },
      { path: 'request-benefit', component: RequestBenefitComponent },
      { path: 'regressive-extract', component: RegressiveExtractComponent },
      { path: 'taxation-regime', component: TaxationRegimeComponent },
      { path: 'extra-contribution', component: ExtraContributionComponent }
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./module/auth/login/login.module').then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
