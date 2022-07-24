import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocationsAutoSuggestComponent } from './user-locations-auto-suggest.component';

describe('UserLocationsAutoSuggestComponent', () => {
  let component: UserLocationsAutoSuggestComponent;
  let fixture: ComponentFixture<UserLocationsAutoSuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLocationsAutoSuggestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLocationsAutoSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
