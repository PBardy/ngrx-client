import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductsSidebarComponent } from './add-products-sidebar.component';

describe('AddProductsSidebarComponent', () => {
  let component: AddProductsSidebarComponent;
  let fixture: ComponentFixture<AddProductsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductsSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
