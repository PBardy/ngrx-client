import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerActionsComponent } from './seller-actions.component';

describe('SellerActionsComponent', () => {
  let component: SellerActionsComponent;
  let fixture: ComponentFixture<SellerActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
