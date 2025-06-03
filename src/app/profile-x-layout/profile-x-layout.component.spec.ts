import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileXLayoutComponent } from './profile-x-layout.component';

describe('ProfileXLayoutComponent', () => {
  let component: ProfileXLayoutComponent;
  let fixture: ComponentFixture<ProfileXLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileXLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileXLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
