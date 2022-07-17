import { Component, OnInit } from '@angular/core';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { selectAllUserLocations } from '@store/selectors/user-location.selectors';

@Component({
  selector: 'app-user-locations',
  templateUrl: './user-locations.component.html',
  styleUrls: ['./user-locations.component.scss'],
})
export class UserLocationsComponent implements OnInit {
  public readonly userLocations$ = this.store.select(selectAllUserLocations);

  public constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit(): void {}
}
