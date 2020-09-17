import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestresulttabComponent } from './testresulttab.component';

describe('TestresulttabComponent', () => {
  let component: TestresulttabComponent;
  let fixture: ComponentFixture<TestresulttabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestresulttabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestresulttabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
