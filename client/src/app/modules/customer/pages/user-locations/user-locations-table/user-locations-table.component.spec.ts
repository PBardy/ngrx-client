import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocationsTableComponent } from './user-locations-table.component';

describe('UserLocationsTableComponent', () => {
  let component: UserLocationsTableComponent;
  let fixture: ComponentFixture<UserLocationsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLocationsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLocationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
