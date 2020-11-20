import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INode } from './model/node';
import { Message } from './model/message';
import { File } from './model/file';
import {Observable} from 'rxjs/Observable';
import { environment } from './../environments/environment';
import { HttpHeaders } from '@angular/common/http';

// service may have injectable dependencies
// hence the Injectable decorator
@Injectable({
  providedIn: 'root'
})
export class NodeService {

    private _url: string = environment.tree_rest_url + '/chemistry/rest/tree/node';
    private new_tree_url: string = environment.tree_rest_url + '/chemistry/rest/tree/new';
    private pdf_url: string = environment.tree_rest_url + '/chemistry/rest/tree/file';

  constructor(private http: HttpClient) { }
  
  getNode(): Observable<INode[]>{
      return this.http.get<INode[]>(this._url);
  }

  newTree(): Observable<Message[]>{
    return this.http.get<Message[]>(this.new_tree_url);
  }

  getPdfFile(): Observable<File[]>{
    return this.http.get<File[]>(this.pdf_url);
  }


  
  
}
