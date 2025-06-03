import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeXLayoutComponent } from './home-x-layout.component';

describe('HomeXLayoutComponent', () => {
  let component: HomeXLayoutComponent;
  let fixture: ComponentFixture<HomeXLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeXLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeXLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
