import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendFriendsComponent } from './recommend-friends.component';

describe('RecommendFriendsComponent', () => {
  let component: RecommendFriendsComponent;
  let fixture: ComponentFixture<RecommendFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
