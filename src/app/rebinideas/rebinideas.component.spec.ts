import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebinideasComponent } from './rebinideas.component';

describe('RebinideasComponent', () => {
  let component: RebinideasComponent;
  let fixture: ComponentFixture<RebinideasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebinideasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebinideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
