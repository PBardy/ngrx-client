import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductAvailability } from '../../../../../../../../server/src/interfaces/product.interface';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss'],
})
export class ProductFiltersComponent implements OnInit {
  public readonly form = new FormGroup({
    priceGroup: new FormControl<number | null>(null),
    availability: new FormControl<ProductAvailability | null>(null),
  });

  public expanded = new SelectionModel<string>(true, []);

  constructor() {}

  ngOnInit(): void {}
}
