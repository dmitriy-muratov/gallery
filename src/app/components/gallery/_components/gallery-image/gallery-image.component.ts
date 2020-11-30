import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

import { takeUntil } from 'rxjs/operators';

import { BaseComponent } from 'src/app/utils/base-component';
import { DialogImageComponent } from 'src/app/components/dialog-image/dialog-image.component';

@Component({
  selector: 'gallery-image',
  styleUrls: ['gallery-image.component.scss'],
  templateUrl: 'gallery-image.component.html',
})
export class GalleryImageComponent extends BaseComponent {
  @Input() public image: IGalleryImage;

  public constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _dialog: MatDialog,
  ){
    super();
  }

  public openImageDialog(image: IGalleryImage): void {
    this._router.navigate([`images/${image.id}`]);

    const dialogRef: MatDialogRef<DialogImageComponent> = this._dialog.open(
      DialogImageComponent,
      {
        data: {
          imageId: image.id
        },
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
  }
}
