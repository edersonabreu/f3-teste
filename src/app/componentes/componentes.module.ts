import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomInputPasswordComponent } from './custom-input-password/custom-input-password.component';

@NgModule({
  declarations: [
    CustomInputComponent,
    CustomButtonComponent,
    CustomInputPasswordComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatIconModule
  ],
  exports:[
    CustomInputComponent,
    CustomButtonComponent,
    CustomInputPasswordComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentesModule { }
