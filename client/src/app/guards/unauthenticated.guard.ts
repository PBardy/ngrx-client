import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { IAppState } from '@interfaces/store/states.interface';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnauthenticatedGuard implements CanActivate {
  public constructor(private readonly store: Store<IAppState>) {}

  public canActivate(): Observable<boolean> {
    return this.store.pipe(
      select((state) => state.auth.token),
      map((token) => !Boolean(token))
    );
  }
}
