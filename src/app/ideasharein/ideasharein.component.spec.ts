import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeashareinComponent } from './ideasharein.component';

describe('IdeashareinComponent', () => {
  let component: IdeashareinComponent;
  let fixture: ComponentFixture<IdeashareinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeashareinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeashareinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
