import { Component, OnInit } from '@angular/core';
import { NodeService } from './../node.service';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

   
    public title;
  constructor(private _nodeService: NodeService) { }

  // live cycle hook
  ngOnInit() {
      this.title = 'Build tree....';
      
  }

}
