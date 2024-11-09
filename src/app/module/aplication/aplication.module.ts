import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicationRoutingModule } from './aplication-routing.module';
import { AplicationComponent } from './aplication.component';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { ExtractComponent } from './extract/extract.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MonthlyContributionComponent } from './monthly-contribution/monthly-contribution.component';
import { MatTableModule } from '@angular/material/table';
import { InformationComponent } from './information/information.component';
import { DocumentsComponent } from './documents/documents.component';
import { RequestBenefitComponent } from './request-benefit/request-benefit.component';
import { RegressiveExtractComponent } from './regressive-extract/regressive-extract.component';
import { TaxationRegimeComponent } from './taxation-regime/taxation-regime.component';
import { ExtraContributionComponent } from './extra-contribution/extra-contribution.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AplicationComponent,
    ExtractComponent,
    MonthlyContributionComponent,
    InformationComponent,
    DocumentsComponent,
    RequestBenefitComponent,
    RegressiveExtractComponent,
    TaxationRegimeComponent,
    ExtraContributionComponent,
  ],
  imports: [
    CommonModule,
    AplicationRoutingModule,
    ComponentesModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatMenuModule
  ]
})
export class AplicationModule { }
