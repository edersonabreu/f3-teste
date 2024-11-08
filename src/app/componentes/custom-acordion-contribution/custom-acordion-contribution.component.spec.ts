import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAcordionContributionComponent } from './custom-acordion-contribution.component';

describe('CustomAcordionContributionComponent', () => {
  let component: CustomAcordionContributionComponent;
  let fixture: ComponentFixture<CustomAcordionContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAcordionContributionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAcordionContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
