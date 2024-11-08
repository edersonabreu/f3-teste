import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxationRegimeComponent } from './taxation-regime.component';

describe('TaxationRegimeComponent', () => {
  let component: TaxationRegimeComponent;
  let fixture: ComponentFixture<TaxationRegimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxationRegimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxationRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
