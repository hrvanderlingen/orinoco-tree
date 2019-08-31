import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INode } from './node';
import {Observable} from 'rxjs/Observable';
import { environment } from './../environments/environment';

// service may have injectable dependencies
// hence the Injectable decorator
@Injectable({
  providedIn: 'root'
})
export class NodeService {

    private _url: string = environment.jsonplaceholder_url + '/todos';

  constructor(private http: HttpClient) { }
  
  getNode(): Observable<INode[]>{
      return this.http.get<INode[]>(this._url);
  }
  
}
