import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocationsEmptyComponent } from './user-locations-empty.component';

describe('UserLocationsEmptyComponent', () => {
  let component: UserLocationsEmptyComponent;
  let fixture: ComponentFixture<UserLocationsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLocationsEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLocationsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
