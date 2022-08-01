import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { selectUserLocationById } from '@store/selectors/user-location.selectors';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.scss'],
})
export class UserLocationComponent implements OnInit {
  public userLocation$ = this.store.select(
    selectUserLocationById(this.userLocationId)
  );

  public constructor(
    private store: Store<IAppState>,
    private readonly route: ActivatedRoute
  ) {}

  public ngOnInit(): void {}

  public get userLocationId(): string {
    return this.route.snapshot.params['uuid'];
  }
}
