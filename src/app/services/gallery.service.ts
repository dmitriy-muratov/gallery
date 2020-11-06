import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { prepareHttpParams } from '../utils/prepare-http-params.helper'

@Injectable()
export class GalleryService {
  public constructor(
    private _httpClient: HttpClient,
  ) {}

  public getAll$(params: TQueryParams = {}): Observable<IPaginatedItems<IGalleryImage[]>> {
    return this._httpClient.get<IPaginatedItems<IGalleryImage[]>>('images', prepareHttpParams(params));
  }

  public getImage$(id: number): Observable<IGalleryImage> {
    return this._httpClient.get<IGalleryImage>(`images/${id}`);
  }
}
