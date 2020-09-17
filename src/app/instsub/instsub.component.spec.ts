import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstsubComponent } from './instsub.component';

describe('InstsubComponent', () => {
  let component: InstsubComponent;
  let fixture: ComponentFixture<InstsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
