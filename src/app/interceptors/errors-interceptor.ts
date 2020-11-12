import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { NEVER, Observable, throwError } from 'rxjs';
import { catchError, retryWhen } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { retryFunctionFactory } from './retry-function-factory';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
  public constructor(private readonly _authService: AuthService) {}

  public intercept(
    req: HttpRequest<{}>,
    next: HttpHandler,
  ): Observable<HttpEvent<{}>> | Observable<never> {
    return next.handle(req).pipe(
      retryWhen(
        retryFunctionFactory({
          maxTTL: 5,
          delayMs: 2000,
          errorsToHandle: [0],
        }),
      ),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {

          // TODO: this._authService.login();

          return NEVER;
        }
        if (error.status === 403 || error.status === 404) {

          // TODO: this._authService.login();

          return NEVER;
        }

        return throwError(error);
      }),
    );
  }
}
