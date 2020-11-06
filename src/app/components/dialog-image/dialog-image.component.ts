import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { takeUntil } from 'rxjs/operators';

import { BaseDialogComponent } from 'src/app/utils/base-dialog-component';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'dialog-image',
  styleUrls: ['dialog-image.component.scss'],
  templateUrl: 'dialog-image.component.html',
})
export class DialogImageComponent extends BaseDialogComponent<DialogImageComponent> {
  public galleryImage: IGalleryImage;

  public constructor(
    private readonly _route: ActivatedRoute,
    private readonly _galleryService: GalleryService
  ) {
    super();
  }

  public ngOnInit(): void {
    // TODO move to resolver
    // TODO save data in subject
    this._galleryService.getImage$(this._route.snapshot.params.imageId).pipe(
      takeUntil(this._destroy$$)
    ).subscribe((data: IGalleryImage) => {
        this.galleryImage = data;
      });
  }
}
