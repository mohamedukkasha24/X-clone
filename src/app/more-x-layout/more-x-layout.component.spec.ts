import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreXLayoutComponent } from './more-x-layout.component';

describe('MoreXLayoutComponent', () => {
  let component: MoreXLayoutComponent;
  let fixture: ComponentFixture<MoreXLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreXLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreXLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
