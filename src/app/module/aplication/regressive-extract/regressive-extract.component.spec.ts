import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressiveExtractComponent } from './regressive-extract.component';

describe('RegressiveExtractComponent', () => {
  let component: RegressiveExtractComponent;
  let fixture: ComponentFixture<RegressiveExtractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegressiveExtractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegressiveExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
