import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrconnectComponent } from './hrconnect.component';

describe('HrconnectComponent', () => {
  let component: HrconnectComponent;
  let fixture: ComponentFixture<HrconnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrconnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
