import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { GalleryService } from '../services/gallery.service';

@Injectable()
export class ImageResolver implements Resolve<IGalleryImage | null> {
  public constructor(private _galleryService: GalleryService, private _router: Router) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<IGalleryImage | null> {
    return this._galleryService.getImage$(route.params.imageId).pipe(
      tap(console.log),
      catchError(() => {
        this._router.navigate(['images']);

        return of(null);
      }),
    );
  }
}
