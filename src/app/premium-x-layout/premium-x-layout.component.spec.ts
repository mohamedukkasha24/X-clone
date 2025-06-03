import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumXLayoutComponent } from './premium-x-layout.component';

describe('PremiumXLayoutComponent', () => {
  let component: PremiumXLayoutComponent;
  let fixture: ComponentFixture<PremiumXLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumXLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumXLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
