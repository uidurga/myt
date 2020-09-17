import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrreqComponent } from './hrreq.component';

describe('HrreqComponent', () => {
  let component: HrreqComponent;
  let fixture: ComponentFixture<HrreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
