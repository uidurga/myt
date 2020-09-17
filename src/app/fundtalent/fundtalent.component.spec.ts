import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundtalentComponent } from './fundtalent.component';

describe('FundtalentComponent', () => {
  let component: FundtalentComponent;
  let fixture: ComponentFixture<FundtalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundtalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundtalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
