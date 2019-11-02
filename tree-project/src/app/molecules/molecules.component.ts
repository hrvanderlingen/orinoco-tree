import { Component, OnInit } from '@angular/core';
import { RscService } from './../_service/rsc.service';
import { environment } from './../../environments/environment';


@Component({
  selector: 'app-molecules',
  templateUrl: './molecules.component.html',
  styleUrls: ['./molecules.component.css']
})
export class MoleculesComponent implements OnInit {

 public title;
 public url;
 public pageOfItems: Array<any>;
 p: number = 1;
    
  constructor(private _RscService: RscService) { }

  ngOnInit() {
        this.title = 'RSC Data resources';
        this.url = environment.rsc_url;
        this._RscService.getResources().subscribe(data => this.pageOfItems = data);
  }


}
