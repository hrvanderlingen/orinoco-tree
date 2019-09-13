import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { IUser } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: IUser;
  
  title = 'tree-project';
  
   constructor(      
        private authenticationService: AuthenticationService,
        private router: Router,
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
   
   languageList = [ 
    { code: 'en', label: 'EN' },
    { code: 'nl', label: 'NL' }
  ];
  
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
  
  
  
  
}
