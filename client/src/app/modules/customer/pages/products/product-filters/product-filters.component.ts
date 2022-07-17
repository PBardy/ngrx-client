import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss'],
})
export class ProductFiltersComponent implements OnInit {
  public readonly form = new FormGroup({
    priceGroup: new FormControl<number | null>(null),
  });

  constructor() {}

  ngOnInit(): void {}
}
