import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomtabsComponent } from './classroomtabs.component';

describe('ClassroomtabsComponent', () => {
  let component: ClassroomtabsComponent;
  let fixture: ComponentFixture<ClassroomtabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomtabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
