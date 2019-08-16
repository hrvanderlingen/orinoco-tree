import { Component, OnInit } from '@angular/core';
import { NodeService } from './../node.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {

 public node = [];
 public title;
 public url;
    
  constructor(private _nodeService: NodeService) { }

  ngOnInit() {
        this.title = 'JSON placeholder demo page';
        this.url = environment.jsonplaceholder_url;
      this._nodeService.getNode().subscribe(data => this.node = data);
  }

}
