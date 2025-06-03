import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsXLayoutComponent } from './notifications-x-layout.component';

describe('NotificationsXLayoutComponent', () => {
  let component: NotificationsXLayoutComponent;
  let fixture: ComponentFixture<NotificationsXLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsXLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsXLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
