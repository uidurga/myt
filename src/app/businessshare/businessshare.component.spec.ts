import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessshareComponent } from './businessshare.component';

describe('BusinessshareComponent', () => {
  let component: BusinessshareComponent;
  let fixture: ComponentFixture<BusinessshareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessshareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
