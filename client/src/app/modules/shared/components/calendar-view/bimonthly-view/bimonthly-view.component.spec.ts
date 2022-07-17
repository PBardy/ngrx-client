import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BimonthlyViewComponent } from './bimonthly-view.component';

describe('BimonthlyViewComponent', () => {
  let component: BimonthlyViewComponent;
  let fixture: ComponentFixture<BimonthlyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BimonthlyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BimonthlyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
