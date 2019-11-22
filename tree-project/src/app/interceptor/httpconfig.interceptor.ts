import { Injectable } from '@angular/core';
import { Role } from './../model/role';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../authentication.service';

import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    
    public currentUser;
    
    constructor(
        private toastr: ToastrService,
        private router: Router,
        private authenticationService: AuthenticationService
        ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));  
        
        if(this.currentUser !== null){
            const token: string = this.currentUser.token;
            
             if (token) {
                request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
            }
        }  
        
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
       
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {  
                var message  = error && error.error && error.error.errorMessage?error.error.errorMessage: error.message;
                this.toastr.error(message, error.statusText);
                if(error.status === 401 &&  request.url.includes("login") === false){
                    this.authenticationService.logout();
                    this.router.navigate(['/login']);
                }
                               
                
                return throwError(error);
            }));
    }  
}