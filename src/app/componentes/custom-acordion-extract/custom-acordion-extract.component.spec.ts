import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAcordionExtractComponent } from './custom-acordion-extract.component';

describe('CustomAcordionExtractComponent', () => {
  let component: CustomAcordionExtractComponent;
  let fixture: ComponentFixture<CustomAcordionExtractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAcordionExtractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAcordionExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
