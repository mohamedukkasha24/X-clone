import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpWithAppleComponent } from './sign-up-with-apple.component';

describe('SignUpWithAppleComponent', () => {
  let component: SignUpWithAppleComponent;
  let fixture: ComponentFixture<SignUpWithAppleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpWithAppleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpWithAppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
