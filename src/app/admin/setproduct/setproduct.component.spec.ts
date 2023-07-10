import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetproductComponent } from './setproduct.component';

describe('SetproductComponent', () => {
  let component: SetproductComponent;
  let fixture: ComponentFixture<SetproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetproductComponent]
    });
    fixture = TestBed.createComponent(SetproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
