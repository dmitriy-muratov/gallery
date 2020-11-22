import {Component, Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseDialogComponent } from 'src/app/utils/base-dialog-component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dialog-image',
  styleUrls: ['dialog-image.component.scss'],
  templateUrl: 'dialog-image.component.html',
})
export class DialogImageComponent extends BaseDialogComponent<void> {
  public galleryImage: IGalleryImage;

  public constructor(
    public dialogRef: MatDialogRef<DialogImageComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      image: IGalleryImage;
      _activatedRoute: ActivatedRoute;
    },
  ) {
    super();

    console.log('data dialog', data);

    this.galleryImage = data.image;
  }
}
