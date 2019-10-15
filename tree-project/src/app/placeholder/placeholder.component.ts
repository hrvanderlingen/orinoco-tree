import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from './../placeholder.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {

 public title;
 public url;
 public pageOfItems: Array<any>;
 p: number = 1;
    
  constructor(private _placeholderService: PlaceholderService) { }

  ngOnInit() {
        this.title = 'JSON placeholder demo page';
        this.url = environment.jsonplaceholder_url;
      this._placeholderService.getPlaceholder().subscribe(data => this.pageOfItems = data);
  }

  

}
