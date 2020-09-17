import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdepartmentComponent } from './bdepartment.component';

describe('BdepartmentComponent', () => {
  let component: BdepartmentComponent;
  let fixture: ComponentFixture<BdepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
