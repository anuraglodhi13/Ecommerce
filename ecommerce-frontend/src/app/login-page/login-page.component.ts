import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginForm } from '../model/login-form-model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication-service';
import { ConstantPool } from '@angular/compiler';
import { Constants } from 'src/config/constants';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit{
  roles: any[] = [];
  loginModel = new LoginForm;
  userNotAuthorized : boolean = false;

  constructor (
    private httpClient : HttpClient,
    private router : Router,
    private authenticationService: AuthenticationService,
    private globalConstant: Constants
  ) {}

  ngOnInit(): void {
   this.populateRolesFromDb();
   this.authenticationService.logout();
    }

    populateRolesFromDb(): void {
      this.httpClient.get<any>(this.globalConstant.DOMAIN +'ecommerce/roles').subscribe(
        response => {
          this.roles = response.data;
        }
      );
    }

    onSubmit(loginForm : NgForm) {
    const loginModelNotEmpty = Object.values(this.loginModel).includes('');
    const loginModeNotNull = Object.values(this.loginModel).includes(null);

    if(!loginModelNotEmpty && !loginModeNotNull && !(this.loginModel.role === undefined)) {

      this.authenticationService.authenticationService(this.loginModel).subscribe(
        response => {
          if(response.status === 200 && this.loginModel.role === 'CUSTOMER') {
            this.router.navigate(['customer']);
            this.userNotAuthorized = false;
            this.authenticationService.registerSuccessfulLogin();
          }

          if(response.status === 200 && this.loginModel.role === 'VENDOR') {
            this.router.navigate(['vendor']);
            this.userNotAuthorized = false;
            this.authenticationService.registerSuccessfulLogin();
          }
        },
        error => {
          if(error.status === 401) {
            console.log(error);
            this.userNotAuthorized = true;
          }
        }
      );
      }
    }

    onReset(loginForm : NgForm) {
      loginForm.resetForm();
      this.userNotAuthorized = false;
    }

}
