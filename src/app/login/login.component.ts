import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any;
  password: any;

  constructor(private http: HttpClient) { 

  }
  loginForm = new FormGroup({
    username : new FormControl(),      
    password: new FormControl(),
  });

  ngOnInit() {
  }

}
