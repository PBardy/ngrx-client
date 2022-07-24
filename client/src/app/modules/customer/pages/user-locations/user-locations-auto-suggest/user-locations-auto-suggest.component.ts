import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { ILocation } from '@interfaces/models/location.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { UserLocationService } from '@services/user-location.service';
import { selectUserLocationAutoSuggestions } from '@store/selectors/user-location.selectors';

@Component({
  selector: 'app-user-locations-auto-suggest',
  templateUrl: './user-locations-auto-suggest.component.html',
  styleUrls: ['./user-locations-auto-suggest.component.scss'],
})
export class UserLocationsAutoSuggestComponent implements OnInit {
  public readonly autoSuggestions$ = this.store.select(
    selectUserLocationAutoSuggestions
  );

  public expanded = false;
  public selection = new SelectionModel<ILocation>(true, []);

  public constructor(
    private readonly store: Store<IAppState>,
    public readonly userLocationsService: UserLocationService
  ) {}

  public ngOnInit(): void {}
}
