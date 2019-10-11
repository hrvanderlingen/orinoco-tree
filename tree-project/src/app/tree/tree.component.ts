import { Component, OnInit } from '@angular/core';
import { NodeService } from './../node.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

    public node = [];
    public title;
  constructor(private _nodeService: NodeService) { }

  // live cycle hook
  ngOnInit() {
      this.title = 'Show tree:';
       this._nodeService.getNode().subscribe(data => this.node = data);
      
  }

  newTree() {   
    this._nodeService.newTree().subscribe(data => this.node = data);

    this._nodeService.getNode().subscribe(data => this.node = data);
  }

}
