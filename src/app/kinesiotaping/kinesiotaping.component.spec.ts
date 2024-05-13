import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinesiotapingComponent } from './kinesiotaping.component';

describe('KinesiotapingComponent', () => {
  let component: KinesiotapingComponent;
  let fixture: ComponentFixture<KinesiotapingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinesiotapingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinesiotapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
