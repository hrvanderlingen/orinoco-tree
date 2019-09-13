import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPlaceholder } from './placeholder';
import {Observable} from 'rxjs/Observable';
import { environment } from './../environments/environment';

// service may have injectable dependencies
// hence the Injectable decorator
@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

    private _url: string = environment.jsonplaceholder_url + '/todos';

  constructor(private http: HttpClient) { }
  
  getPlaceholder(): Observable<IPlaceholder[]>{
      return this.http.get<IPlaceholder[]>(this._url);
  }
  
}
