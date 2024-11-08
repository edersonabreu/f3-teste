import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBenefitComponent } from './request-benefit.component';

describe('RequestBenefitComponent', () => {
  let component: RequestBenefitComponent;
  let fixture: ComponentFixture<RequestBenefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestBenefitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
