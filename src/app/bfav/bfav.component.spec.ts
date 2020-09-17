import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfavComponent } from './bfav.component';

describe('BfavComponent', () => {
  let component: BfavComponent;
  let fixture: ComponentFixture<BfavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
