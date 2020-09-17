import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinmainComponent } from './binmain.component';

describe('BinmainComponent', () => {
  let component: BinmainComponent;
  let fixture: ComponentFixture<BinmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
