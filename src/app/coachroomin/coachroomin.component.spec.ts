import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachroominComponent } from './coachroomin.component';

describe('CoachroominComponent', () => {
  let component: CoachroominComponent;
  let fixture: ComponentFixture<CoachroominComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachroominComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachroominComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
