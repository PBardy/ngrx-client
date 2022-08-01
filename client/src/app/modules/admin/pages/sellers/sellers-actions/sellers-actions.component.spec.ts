import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersActionsComponent } from './sellers-actions.component';

describe('SellersActionsComponent', () => {
  let component: SellersActionsComponent;
  let fixture: ComponentFixture<SellersActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellersActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
