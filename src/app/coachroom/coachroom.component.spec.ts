import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachroomComponent } from './coachroom.component';

describe('CoachroomComponent', () => {
  let component: CoachroomComponent;
  let fixture: ComponentFixture<CoachroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
