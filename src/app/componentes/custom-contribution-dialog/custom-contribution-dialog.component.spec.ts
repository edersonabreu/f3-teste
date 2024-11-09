import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomContributionDialogComponent } from './custom-contribution-dialog.component';

describe('CustomContributionDialogComponent', () => {
  let component: CustomContributionDialogComponent;
  let fixture: ComponentFixture<CustomContributionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomContributionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomContributionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
