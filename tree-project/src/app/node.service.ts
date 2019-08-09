import { Injectable } from '@angular/core';

// service may have injectable dependencies
// hence the Injectable decorator
@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor() { }
  
  getNode(){
      return [1,2,3,4];
  }
  
}
