import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsXLayoutComponent } from './lists-x-layout.component';

describe('ListsXLayoutComponent', () => {
  let component: ListsXLayoutComponent;
  let fixture: ComponentFixture<ListsXLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListsXLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsXLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
