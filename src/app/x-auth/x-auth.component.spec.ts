import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XAuthComponent } from './x-auth.component';

describe('XAuthComponent', () => {
  let component: XAuthComponent;
  let fixture: ComponentFixture<XAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
