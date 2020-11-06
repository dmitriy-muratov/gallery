import { HttpErrorResponse } from '@angular/common/http';
import { OnDestroy } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { BaseComponent } from './base-component';

export abstract class BaseDialogComponent<T> extends BaseComponent implements OnDestroy {
  public get success$(): Observable<T> {
    return this._success$$.asObservable();
  }

  public get error$(): Observable<HttpErrorResponse> {
    return this._error$$.asObservable();
  }

  protected _error$$: Subject<HttpErrorResponse> = new Subject<HttpErrorResponse>();
  protected _success$$: Subject<T> = new Subject<T>();

  public ngOnDestroy(): void {
    super.ngOnDestroy();

    this._error$$.complete();
    this._success$$.complete();
  }
}
