import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvaComponent } from './mva.component';

describe('MvaComponent', () => {
  let component: MvaComponent;
  let fixture: ComponentFixture<MvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
