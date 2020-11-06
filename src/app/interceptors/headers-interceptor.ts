import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  public constructor(private readonly _authService: AuthService) {}

  public intercept(req: HttpRequest<{}>, next: HttpHandler): Observable<HttpEvent<{}>> {
    const headers: { [key: string]: string } = {
      'Authorization': 'Bearer ' + this._authService.getAccessToken(),
      'Content-Type': 'application/json'
    };

    return next.handle(
      req.clone({
        setHeaders: headers,
      }),
    );
  }
}
