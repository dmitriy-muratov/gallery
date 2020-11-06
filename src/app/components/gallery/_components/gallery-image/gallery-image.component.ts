import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

import { DialogImageComponent } from 'src/app/components/dialog-image/dialog-image.component';

@Component({
  selector: 'gallery-image',
  styleUrls: ['gallery-image.component.scss'],
  templateUrl: 'gallery-image.component.html',
})
export class GalleryImageComponent {
  @Input() public image: IGalleryImage;

  public constructor(
    private _dialog: MatDialog,
    private _router: Router,
  ){}


  public openImageDialog(image: IGalleryImage): void {
    this._router.navigate([`images/${image.id}`]);

    this._dialog.open(
      DialogImageComponent,
      {
        data: {image},
      },
    );
  }
}
