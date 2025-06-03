import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedorgsXLayoutComponent } from './verifiedorgs-x-layout.component';

describe('VerifiedorgsXLayoutComponent', () => {
  let component: VerifiedorgsXLayoutComponent;
  let fixture: ComponentFixture<VerifiedorgsXLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifiedorgsXLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedorgsXLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
