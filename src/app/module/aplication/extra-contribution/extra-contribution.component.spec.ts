import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraContributionComponent } from './extra-contribution.component';

describe('ExtraContributionComponent', () => {
  let component: ExtraContributionComponent;
  let fixture: ComponentFixture<ExtraContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraContributionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
