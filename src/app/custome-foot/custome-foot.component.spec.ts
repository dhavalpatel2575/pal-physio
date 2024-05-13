import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeFootComponent } from './custome-foot.component';

describe('CustomeFootComponent', () => {
  let component: CustomeFootComponent;
  let fixture: ComponentFixture<CustomeFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeFootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
