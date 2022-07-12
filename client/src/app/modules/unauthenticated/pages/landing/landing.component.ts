import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserType } from '@interfaces/models/user-type.interface';
import { IAppState } from '@interfaces/store/states.interface';
import { Store } from '@ngrx/store';
import { getUserTypes } from '@store/selectors/user-type.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  private readonly subscriptions = new Subscription();

  public readonly userTypes$ = this.store.select((state) =>
    getUserTypes(state.userTypes)
  );

  public selectionModel = new SelectionModel<IUserType>(false);

  public constructor(
    private readonly router: Router,
    private readonly store: Store<IAppState>
  ) {}

  public ngOnInit(): void {
    this.subscriptions.add(this.initUserTypes());
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initUserTypes() {
    this.userTypes$.subscribe((userTypes) => {
      this.selectionModel.select(userTypes[0]);
    });
  }

  public get selected(): IUserType | null {
    return this.selectionModel.selected[0];
  }

  public signIn(): void {
    this.router.navigate(['/sign-in', { state: this.selected?.tag }]);
  }

  public signUp(): void {
    this.router.navigate(['/sign-up', { state: this.selected?.tag }]);
  }
}
