import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceInjuryComponent } from './workplace-injury.component';

describe('WorkplaceInjuryComponent', () => {
  let component: WorkplaceInjuryComponent;
  let fixture: ComponentFixture<WorkplaceInjuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplaceInjuryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceInjuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
