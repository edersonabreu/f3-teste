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

@NgModule({
  declarations: [
    AplicationComponent,
    ExtractComponent,
    MonthlyContributionComponent
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
    MatTableModule
  ]
})
export class AplicationModule { }
