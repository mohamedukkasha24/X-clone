import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksXLayoutComponent } from './bookmarks-x-layout.component';

describe('BookmarksXLayoutComponent', () => {
  let component: BookmarksXLayoutComponent;
  let fixture: ComponentFixture<BookmarksXLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarksXLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarksXLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
