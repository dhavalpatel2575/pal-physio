import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiropractorComponent } from './chiropractor.component';

describe('ChiropractorComponent', () => {
  let component: ChiropractorComponent;
  let fixture: ComponentFixture<ChiropractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiropractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiropractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
