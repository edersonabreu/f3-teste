import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialBackgroundComponent } from './partial-background.component';

describe('PartialBackgroundComponent', () => {
  let component: PartialBackgroundComponent;
  let fixture: ComponentFixture<PartialBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
