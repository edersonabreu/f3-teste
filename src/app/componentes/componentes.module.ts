import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomInputPasswordComponent } from './custom-input-password/custom-input-password.component';
import { CustomSidenavComponent } from './custom-sidenav/custom-sidenav.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PartialBackgroundComponent } from './partial-background/partial-background.component';
import { HeaderComponent } from './header/header.component';
import { CustomAcordionExtractComponent } from './custom-acordion-extract/custom-acordion-extract.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CustomInformationComponent } from './custom-information/custom-information.component';
import { CustomAcordionContributionComponent } from './custom-acordion-contribution/custom-acordion-contribution.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomContributionDialogComponent } from './custom-contribution-dialog/custom-contribution-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    CustomInputComponent,
    CustomButtonComponent,
    CustomInputPasswordComponent,
    CustomSidenavComponent,
    CustomDialogComponent,
    PartialBackgroundComponent,
    HeaderComponent,
    CustomAcordionExtractComponent,
    CustomInformationComponent,
    CustomAcordionContributionComponent,
    CustomContributionDialogComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatDialogModule,
    MatExpansionModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  exports:[
    CustomInputComponent,
    CustomButtonComponent,
    CustomInputPasswordComponent,
    CustomSidenavComponent,
    CustomDialogComponent,
    PartialBackgroundComponent,
    HeaderComponent,
    CustomAcordionExtractComponent, 
    CustomInformationComponent,
    CustomAcordionContributionComponent,
    CustomContributionDialogComponent,
    LoadingComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentesModule { }
