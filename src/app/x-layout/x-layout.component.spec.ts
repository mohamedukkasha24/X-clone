import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XLayoutComponent } from './x-layout.component';

describe('XLayoutComponent', () => {
  let component: XLayoutComponent;
  let fixture: ComponentFixture<XLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
