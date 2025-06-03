import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideSignUpComponent } from './inside-sign-up.component';

describe('InsideSignUpComponent', () => {
  let component: InsideSignUpComponent;
  let fixture: ComponentFixture<InsideSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsideSignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsideSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
