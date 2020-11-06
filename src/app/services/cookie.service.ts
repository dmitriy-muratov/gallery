import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {
  private _cookieString: string;

  public constructor() {
    this._cookieString = document.cookie || '';
  }

  public getByKey(key: string): string {
    let result: string = '';
    const cookieArr: string[] = this._cookieString.split(';');

    cookieArr.forEach((item: string) => {
      if (item.indexOf(key) !== -1) {
        result = item.split('=')[1].trim();
      }
    });

    return result;
  }
}
