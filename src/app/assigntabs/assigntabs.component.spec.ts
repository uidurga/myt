import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigntabsComponent } from './assigntabs.component';

describe('AssigntabsComponent', () => {
  let component: AssigntabsComponent;
  let fixture: ComponentFixture<AssigntabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigntabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigntabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
