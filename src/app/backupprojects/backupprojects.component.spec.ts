import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupprojectsComponent } from './backupprojects.component';

describe('BackupprojectsComponent', () => {
  let component: BackupprojectsComponent;
  let fixture: ComponentFixture<BackupprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
