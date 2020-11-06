import { OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';

export abstract class BaseComponent implements OnDestroy {
  protected _destroy$$: Subject<void> = new Subject<void>();

  public ngOnDestroy(): void {
    this._destroy$$.next();
    this._destroy$$.complete();
  }
}
