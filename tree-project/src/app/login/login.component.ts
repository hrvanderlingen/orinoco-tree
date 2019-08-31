import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../authentication.service';
import { first } from 'rxjs/operators';


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
    error = '';

    constructor(
        private formBuilder: FormBuilder,     
        private authenticationService: AuthenticationService
    ) { 
        
    }

  ngOnInit() {
     
    this.loginForm = this.formBuilder.group({
            email: ['test@example.com', Validators.required],
            password: ['notsosecret', Validators.required]
        });     
  }
  
  get f() { return this.loginForm.controls; }
  
  onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                  
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
  
  

}
