import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { BaseDialogComponent } from 'src/app/utils/base-dialog-component';

@Component({
  selector: 'dialog-image',
  styleUrls: ['dialog-image.component.scss'],
  templateUrl: 'dialog-image.component.html',
})
export class DialogImageComponent extends BaseDialogComponent<void> {
  public galleryImage: IGalleryImage;
  public galleryImage$: Observable<IGalleryImage>;

  public constructor(
    public dialogRef: MatDialogRef<DialogImageComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      image: IGalleryImage
    }
  ) {
    super();

    this.galleryImage = data.image;
  }
}
