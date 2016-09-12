import { Component, OnInit, ElementRef } from '@angular/core';
import { LoginService } from '../services/login.service';
import {  
          FormGroup, 
          FormControl, 
          Validators, 
          FormBuilder,
          AbstractControl
                              } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;
  loaded: boolean = false;

  loginForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    if(localStorage.getItem("user") && localStorage.getItem("token")){
      this._router.navigateByUrl('admin');
    } else {
      this.loaded = true;
      this.loginForm = this._formBuilder.group({
        "username": ["", Validators.required],
        "password": ["", Validators.required]
      });
      this.username = this.loginForm.controls["username"];
      this.password = this.loginForm.controls["password"];
    }
  }

  login(data) {
    let login = data.username;
    let password = data.password;
    this._loginService.login(login,password).subscribe(
                      response => {
                        if(!response["token"]) {
                          this.error = response["error"];
                        } else {
                          this.error = null;
                          localStorage.setItem("user",login);
                          localStorage.setItem("token",response["token"]);
                          this._router.navigateByUrl('admin');
                        }
                      }
                    );
  }

}
