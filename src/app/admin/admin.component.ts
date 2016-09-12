import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  moduleId: module.id,
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private _router: Router,
    private _loginService: LoginService  
  ) { }

  ngOnInit() {
    if(!localStorage.getItem("user") || !localStorage.getItem("token")){
      this._router.navigateByUrl('login');
    }
  }

  logout(): void {
    this._loginService.logout();
    this._router.navigateByUrl('login');
  }

}
