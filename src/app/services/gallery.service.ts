import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { prepareHttpParams } from '../utils/prepare-http-params.helper'
import { catchError } from 'rxjs/operators';

@Injectable()
export class GalleryService {
  name: string = 'Max';


  public constructor(
    private _httpClient: HttpClient,
  ) {}

  public getAll$(params: TQueryParams = {}): Observable<IPaginatedItems<IGalleryImage[]>> {
    return this._httpClient.get<IPaginatedItems<IGalleryImage[]>>('images', prepareHttpParams(params)).pipe(
      catchError((error) => {
        console.log(error);
        return of(error)
      })
    );
  }

  public getImage$(id: string): Observable<IGalleryImage> {
    return this._httpClient.get<IGalleryImage>(`images/${id}`);
  }
}
