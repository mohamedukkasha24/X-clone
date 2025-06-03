import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreXLayoutComponent } from './explore-x-layout.component';

describe('ExploreXLayoutComponent', () => {
  let component: ExploreXLayoutComponent;
  let fixture: ComponentFixture<ExploreXLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreXLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreXLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
