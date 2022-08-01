import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserLocationTagsComponent } from './add-user-location-tags.component';

describe('AddUserLocationTagsComponent', () => {
  let component: AddUserLocationTagsComponent;
  let fixture: ComponentFixture<AddUserLocationTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserLocationTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserLocationTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
