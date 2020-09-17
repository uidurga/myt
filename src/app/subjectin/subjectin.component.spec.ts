import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectinComponent } from './subjectin.component';

describe('SubjectinComponent', () => {
  let component: SubjectinComponent;
  let fixture: ComponentFixture<SubjectinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
