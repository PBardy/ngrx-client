import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationActionsComponent } from './location-actions.component';

describe('LocationActionsComponent', () => {
  let component: LocationActionsComponent;
  let fixture: ComponentFixture<LocationActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
