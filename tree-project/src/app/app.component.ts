import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tree-project';
  today = new Date();
  price = 1050.30;
  
  
   languageList = [ 
    { code: 'en', label: 'EN' },
    { code: 'nl', label: 'NL' }
  ];
  
}
