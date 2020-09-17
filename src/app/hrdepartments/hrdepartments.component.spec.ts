import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdepartmentsComponent } from './hrdepartments.component';

describe('HrdepartmentsComponent', () => {
  let component: HrdepartmentsComponent;
  let fixture: ComponentFixture<HrdepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
