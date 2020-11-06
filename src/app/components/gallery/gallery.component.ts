import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'gallery',
  styleUrls: ['./gallery.component.scss'],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  public galleryImages$: Observable<IGalleryImage[]> = this._galleryService.getAll$().pipe(
    map((data: IPaginatedItems<IGalleryImage[]>) => data.pictures)
  );

  constructor(private readonly _galleryService: GalleryService) {}
}
