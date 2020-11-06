import { CanActivate, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  public static readonly AUTH_TOKEN: string = 'accessToken';

  public constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  public canActivate(): Observable<boolean> {
    return this._authService.login$().pipe(
      catchError((response: HttpErrorResponse) => {
        return response && response.status === 404 ? of(null) : throwError(response);
      }),
      tap((data: IAuthData) => {
        if (!data) {
          // TODO navigate to login page, etc
          // this._router.navigate(['/']);
        }

        this._authService.setAccessToken(data.token);
      }),
      map(Boolean)
    );
  }
}
