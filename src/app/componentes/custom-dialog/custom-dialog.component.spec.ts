import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDialogComponent } from './custom-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CustomDialogComponent', () => {
  let component: CustomDialogComponent;
  let fixture: ComponentFixture<CustomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomDialogComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { close: jasmine.createSpy('close') } 
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { titulo: 'Test Title', icone: 'check', subtitulo: 'Test Subtitle' }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy(); 
  });

  it('deve fechar o modal', () => {
    component.closeModal();
    expect(component.dialogRef.close).toHaveBeenCalled();
  });

});
