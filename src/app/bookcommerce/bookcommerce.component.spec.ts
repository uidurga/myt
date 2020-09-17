import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcommerceComponent } from './bookcommerce.component';

describe('BookcommerceComponent', () => {
  let component: BookcommerceComponent;
  let fixture: ComponentFixture<BookcommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookcommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
