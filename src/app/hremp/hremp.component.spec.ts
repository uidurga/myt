import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrempComponent } from './hremp.component';

describe('HrempComponent', () => {
  let component: HrempComponent;
  let fixture: ComponentFixture<HrempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
