import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { itemFadeInOut } from 'src/app/animations/fade-in-out.animation';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'gallery',
  styleUrls: ['./gallery.component.scss'],
  templateUrl: './gallery.component.html',
  animations: [itemFadeInOut]
})
export class GalleryComponent implements OnInit {
  public galleryImages$: Observable<IGalleryImage[]>;

  public cardLayout: Observable<any> = this._breakpointObserver.observe(Breakpoints.XSmall).pipe(
    map(({ matches }) => matches ? 1 : 3)
  );

  public constructor(
    private readonly _galleryService: GalleryService,
    private readonly _breakpointObserver: BreakpointObserver
  ) {}

  public ngOnInit(): void {
    this.galleryImages$ = this._galleryService.getAll$().pipe(
      map((data: IPaginatedItems<IGalleryImage[]>) => data.pictures)
    );
  }
}
