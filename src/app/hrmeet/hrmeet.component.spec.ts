import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmeetComponent } from './hrmeet.component';

describe('HrmeetComponent', () => {
  let component: HrmeetComponent;
  let fixture: ComponentFixture<HrmeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrmeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
