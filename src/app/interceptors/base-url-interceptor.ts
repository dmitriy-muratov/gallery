import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

// import { API_URL } from '../../../config';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  public constructor(
    // @Inject('API_URL') private _API_URL: string,
  ) {}

  public intercept(req: HttpRequest<{}>, next: HttpHandler): Observable<HttpEvent<{}>> {
    // TODO: finish injection
    // return next.handle(req.clone({ url: this._API_URL  + req.url }));
    return next.handle(req.clone({ url: 'http://test.com/'  + req.url }));
  }
}
