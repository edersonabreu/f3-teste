import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyContributionComponent } from './monthly-contribution.component';

describe('MonthlyContributionComponent', () => {
  let component: MonthlyContributionComponent;
  let fixture: ComponentFixture<MonthlyContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyContributionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
