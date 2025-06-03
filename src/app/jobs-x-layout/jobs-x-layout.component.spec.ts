import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsXLayoutComponent } from './jobs-x-layout.component';

describe('JobsXLayoutComponent', () => {
  let component: JobsXLayoutComponent;
  let fixture: ComponentFixture<JobsXLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsXLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsXLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
