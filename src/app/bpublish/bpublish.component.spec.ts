import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpublishComponent } from './bpublish.component';

describe('BpublishComponent', () => {
  let component: BpublishComponent;
  let fixture: ComponentFixture<BpublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
