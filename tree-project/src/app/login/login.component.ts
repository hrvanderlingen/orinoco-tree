import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../authentication.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;   
    errorMessage: string;
    

    constructor(
        private formBuilder: FormBuilder,     
        private authenticationService: AuthenticationService,
        private route: ActivatedRoute,
        private router: Router,
    ) {          
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

  ngOnInit() {
     
    this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        }); 
         
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';    
  }
  
  get f() { return this.loginForm.controls; }
  
  onSubmit() {
        this.submitted = true;
        
        if (this.loginForm.invalid) {
            return;
        }
        
        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                   this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.errorMessage  = error && error.error && error.error.errorMessage?error.error.errorMessage: error.message;                                  
                    this.loading = false;
                });
    }
 
}
