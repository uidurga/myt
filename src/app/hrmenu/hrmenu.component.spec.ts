import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmenuComponent } from './hrmenu.component';

describe('HrmenuComponent', () => {
  let component: HrmenuComponent;
  let fixture: ComponentFixture<HrmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
