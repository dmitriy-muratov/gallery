import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


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

  public cardLayout: Observable<any> = this._breakpointObserver.observe(Breakpoints.XSmall).pipe(
    map(({ matches }) => matches ? 1 : 3)
  );

  constructor(
    private readonly _galleryService: GalleryService,
    private readonly _breakpointObserver: BreakpointObserver
  ) {}
}
