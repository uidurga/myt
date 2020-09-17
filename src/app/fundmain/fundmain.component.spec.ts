import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundmainComponent } from './fundmain.component';

describe('FundmainComponent', () => {
  let component: FundmainComponent;
  let fixture: ComponentFixture<FundmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
