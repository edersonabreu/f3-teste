import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInformationComponent } from './custom-information.component';

describe('CustomInformationComponent', () => {
  let component: CustomInformationComponent;
  let fixture: ComponentFixture<CustomInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
