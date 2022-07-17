import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-products-actions',
  templateUrl: './products-actions.component.html',
  styleUrls: ['./products-actions.component.scss'],
})
export class ProductsActionsComponent implements OnInit {
  @Output() public change = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public onChange(event: MatButtonToggleChange): void {
    this.change.emit(event.value);
  }
}
