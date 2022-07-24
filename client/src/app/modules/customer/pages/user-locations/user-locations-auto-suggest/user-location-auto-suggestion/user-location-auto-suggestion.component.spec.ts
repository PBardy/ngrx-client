import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocationAutoSuggestionComponent } from './user-location-auto-suggestion.component';

describe('UserLocationAutoSuggestionComponent', () => {
  let component: UserLocationAutoSuggestionComponent;
  let fixture: ComponentFixture<UserLocationAutoSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLocationAutoSuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLocationAutoSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
