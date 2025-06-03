import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesXLayoutComponent } from './communities-x-layout.component';

describe('CommunitiesXLayoutComponent', () => {
  let component: CommunitiesXLayoutComponent;
  let fixture: ComponentFixture<CommunitiesXLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunitiesXLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunitiesXLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
