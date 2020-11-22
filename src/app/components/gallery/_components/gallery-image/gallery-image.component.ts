import {Component, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gallery-image',
  styleUrls: ['gallery-image.component.scss'],
  templateUrl: 'gallery-image.component.html',
})
export class GalleryImageComponent {
  @Input() public image: IGalleryImage;

  public constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ){}

  public openImageDialog(image: IGalleryImage): void {
    this._router.navigate([`images/${image.id}`]);
  }
}
