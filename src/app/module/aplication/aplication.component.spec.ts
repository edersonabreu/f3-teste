import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationComponent } from './aplication.component';

describe('AplicationComponent', () => {
  let component: AplicationComponent;
  let fixture: ComponentFixture<AplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
