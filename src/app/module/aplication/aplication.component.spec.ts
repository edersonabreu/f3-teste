import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationComponent } from './aplication.component';
import { ActivatedRoute } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

describe('AplicationComponent', () => {
  let component: AplicationComponent;
  let fixture: ComponentFixture<AplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AplicationComponent],  
      imports: [MatSidenavModule],
      providers: [
        {
          provide: ActivatedRoute,  
          useValue: {
            snapshot: { params: { id: '123' } } 
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });

});
