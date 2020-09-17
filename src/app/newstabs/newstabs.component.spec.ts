import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstabsComponent } from './newstabs.component';

describe('NewstabsComponent', () => {
  let component: NewstabsComponent;
  let fixture: ComponentFixture<NewstabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
