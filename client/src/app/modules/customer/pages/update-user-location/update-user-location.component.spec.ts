import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserLocationComponent } from './update-user-location.component';

describe('UpdateUserLocationComponent', () => {
  let component: UpdateUserLocationComponent;
  let fixture: ComponentFixture<UpdateUserLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
