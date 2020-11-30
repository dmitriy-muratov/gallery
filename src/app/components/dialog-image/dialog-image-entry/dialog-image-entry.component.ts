import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { takeUntil, pluck, tap, map, take } from 'rxjs/operators';

import { BaseComponent } from 'src/app/utils/base-component';
import { DialogImageComponent } from '../dialog-image.component';

@Component({
  selector: 'app-dialog-image-entry',
  template: ''
})
export class DialogImageEntryComponent extends BaseComponent {
  public constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _dialog: MatDialog,
    private readonly _router: Router
  ) {
    super();

    this.openDialog();
  }

  public openDialog(): void {
    this._activatedRoute.data
      .pipe(
        pluck('image'),
        takeUntil(this._destroy$$)
      ).subscribe((data: any) => {
        if (!data) {
          this._router.navigate(['images']);
        }

        const dialogRef: MatDialogRef<DialogImageComponent> = this._dialog.open(
          DialogImageComponent,
          {
            data: {
              image: data
            }
          },
        );

        dialogRef.componentInstance.error$.pipe(takeUntil(this._destroy$$)).subscribe(() => {
          dialogRef.close();
        });

        dialogRef
          .afterClosed()
          .pipe(takeUntil(this._destroy$$))
          .subscribe(() => {
            this._router.navigate(['images']);
          });
      });
  }

}
