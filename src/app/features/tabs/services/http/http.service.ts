import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  loadData(url: string): Observable<any>  {
    if (!url ) {
      return of([]);
    }
    return this._http.get(url).pipe(
      map(res => res || [])
    );
  }
}
