import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRscDataResource } from './../model/rsc.data.resource';
import {Observable} from 'rxjs/Observable';
import { environment } from './../../environments/environment';

// service may have injectable dependencies
// hence the Injectable decorator
@Injectable({
  providedIn: 'root'
})
export class RscService {

  private _url: string = environment.tree_rest_url + '/chemistry/rest/tree/rsc-data-resources';
    
  constructor(private http: HttpClient) { }
  
  getResources(): Observable<IRscDataResource[]>{
      return this.http.get<IRscDataResource[]>(this._url);
  }

 
  
}
