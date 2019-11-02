import { Injectable } from '@angular/core';
import { Role } from './../model/role';
import { ToastrService } from 'ngx-toastr';

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
    
    constructor(private toastr: ToastrService) { }
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
                let data = {};console.log(error.error.message);
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                this.toastr.error(error.error.message, error.statusText);
                return throwError(error);
            }));
    }  
}