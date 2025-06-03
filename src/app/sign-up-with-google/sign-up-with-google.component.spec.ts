import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpWithGoogleComponent } from './sign-up-with-google.component';

describe('SignUpWithGoogleComponent', () => {
  let component: SignUpWithGoogleComponent;
  let fixture: ComponentFixture<SignUpWithGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpWithGoogleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpWithGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
