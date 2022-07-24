import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { ILocation } from '@interfaces/models/location.interface';

@Component({
  selector: 'app-user-location-auto-suggestion',
  templateUrl: './user-location-auto-suggestion.component.html',
  styleUrls: ['./user-location-auto-suggestion.component.scss'],
})
export class UserLocationAutoSuggestionComponent implements OnInit {
  @Input() public autoSuggestion: ILocation;
  @Input() public selection: SelectionModel<ILocation>;

  constructor() {}

  ngOnInit(): void {}
}
