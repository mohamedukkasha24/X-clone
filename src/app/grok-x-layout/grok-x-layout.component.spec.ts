import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrokXLayoutComponent } from './grok-x-layout.component';

describe('GrokXLayoutComponent', () => {
  let component: GrokXLayoutComponent;
  let fixture: ComponentFixture<GrokXLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrokXLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrokXLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
