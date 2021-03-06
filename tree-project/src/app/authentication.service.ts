import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './model/user';
import { environment } from './../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// service may have injectable dependencies
// hence the Injectable decorator
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    
    private currentUserSubject: BehaviorSubject<IUser>;
    public currentUser: Observable<IUser>;
    private _url: string = environment.tree_rest_url + '/chemistry/rest/service/login';

  constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
  
  public get currentUserValue(): IUser {
        return this.currentUserSubject.value;
    }

  
   login(username: string, password: string) {
              
        return this.http.post<any>(this._url, { username, password})
            .pipe(             
              map(user => {
                // store user details and jwt token in local storage to keep user 
                // logged in between page refreshes
                
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
                }
              )
            );
    }
    
     logout() {       
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
  
  
  
}
