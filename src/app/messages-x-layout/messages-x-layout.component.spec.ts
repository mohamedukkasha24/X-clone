import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesXLayoutComponent } from './messages-x-layout.component';

describe('MessagesXLayoutComponent', () => {
  let component: MessagesXLayoutComponent;
  let fixture: ComponentFixture<MessagesXLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesXLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesXLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
