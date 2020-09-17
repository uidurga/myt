import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstasubinComponent } from './instasubin.component';

describe('InstasubinComponent', () => {
  let component: InstasubinComponent;
  let fixture: ComponentFixture<InstasubinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstasubinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstasubinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
