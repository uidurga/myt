import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkpinnerComponent } from './bkpinner.component';

describe('BkpinnerComponent', () => {
  let component: BkpinnerComponent;
  let fixture: ComponentFixture<BkpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
