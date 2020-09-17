import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundmenuComponent } from './fundmenu.component';

describe('FundmenuComponent', () => {
  let component: FundmenuComponent;
  let fixture: ComponentFixture<FundmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
