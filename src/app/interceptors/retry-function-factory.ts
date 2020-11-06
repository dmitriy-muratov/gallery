import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

// This function is for using inside rxjs operator .retryWhen()
// to perform retry on chosen http errors
//
// How to use (an example):
//
//  ...
//    .retryWhen(retryFunctionFactory({
//      maxTTL: 10,
//      delayMs: 1000,
//      errorsToHandle: [0, 500]
//    }))
//  ...

// tslint:disable-next-line:typedef
export const retryFunctionFactory = (retryFnConfig: {
  maxTTL: number;
  delayMs: number;
  errorsToHandle: number[];
}) => {
  return (error$: Observable<HttpErrorResponse>) => {
    let ttl: number = retryFnConfig.maxTTL;

    return error$.pipe(
      mergeMap((error: HttpErrorResponse) => {
        if (ttl && retryFnConfig.errorsToHandle.indexOf(error.status) !== -1) {
          ttl--;

          return of(null).pipe(delay(retryFnConfig.delayMs));
        }

        return throwError(error);
      }),
    );
  };
};
