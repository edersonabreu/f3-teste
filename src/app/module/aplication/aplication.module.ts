import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicationRoutingModule } from './aplication-routing.module';
import { AplicationComponent } from './aplication.component';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { ExtractComponent } from './extract/extract.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AplicationComponent,
    ExtractComponent
  ],
  imports: [
    CommonModule,
    AplicationRoutingModule,
    ComponentesModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule
  ]
})
export class AplicationModule { }
