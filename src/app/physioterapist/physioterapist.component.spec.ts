import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioterapistComponent } from './physioterapist.component';

describe('PhysioterapistComponent', () => {
  let component: PhysioterapistComponent;
  let fixture: ComponentFixture<PhysioterapistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioterapistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioterapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
