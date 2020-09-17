import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomechatComponent } from './homechat.component';

describe('HomechatComponent', () => {
  let component: HomechatComponent;
  let fixture: ComponentFixture<HomechatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomechatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
