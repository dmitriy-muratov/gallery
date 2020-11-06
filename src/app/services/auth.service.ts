import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

// import { API_KEY } from '../../../config';

import { CookieService } from './cookie.service';

@Injectable()
export class AuthService {
  public static readonly AUTH_TOKEN: string = 'token';

  public constructor(
    // @Inject('API_KEY') private _API_KEY: string,
    private _httpClient: HttpClient,
    private _cookieService: CookieService,
  ) {}

  public login$(): Observable<IAuthData> {
    // TODO: finish injection
    // return this._httpClient.post<IAuthData>('auth', { apiKey: this._API_KEY });
    return this._httpClient.post<IAuthData>('auth', { apiKey: '23567b218376f79d9415' });
  }

  public setAccessToken(token: string) {
    document.cookie = AuthService.AUTH_TOKEN + '=' + (token || '');
  }

  public getAccessToken(): string {
    return this._cookieService.getByKey(AuthService.AUTH_TOKEN);
  }
}
