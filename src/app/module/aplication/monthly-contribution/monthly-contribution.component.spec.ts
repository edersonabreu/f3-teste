import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyContributionComponent } from './monthly-contribution.component';
import { CustomAcordionContributionComponent } from 'src/app/componentes/custom-acordion-contribution/custom-acordion-contribution.component';

describe('MonthlyContributionComponent', () => {
  let component: MonthlyContributionComponent;
  let fixture: ComponentFixture<MonthlyContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlyContributionComponent, CustomAcordionContributionComponent]  
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
