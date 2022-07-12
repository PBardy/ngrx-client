import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@interfaces/store/states.interface';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public token: string | null = null;

  public constructor(private readonly store: Store<IAppState>) {
    this.store.pipe(select((state) => state.auth.token)).subscribe((token) => {
      this.token = token;
    });
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.token) {
      return next.handle(
        req.clone({
          setHeaders: {
            Authorization: `Bearer ${this.token}`,
          },
        })
      );
    }

    return next.handle(req);
  }
}
