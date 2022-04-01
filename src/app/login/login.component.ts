import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../utils/URLS';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any;
  password: any;
  message: any;

  constructor(private http: HttpClient,public urls: URLS,public router: Router) {

  }
  loginForm = new FormGroup({
    username : new FormControl(),
    password: new FormControl(),
  });
  onLoggedIn(User_data) {
    // console.log(User_data);
    this.sentLoggedInRequest(User_data);
  }
  sentLoggedInRequest(user_data: any) {
    let url = this.urls.WorkBaseUrl+"Authentication/LoginAction.php?email="+user_data.username+"&password="+user_data.password;
    this.http.get(url).subscribe(response =>{
      // this.message = response['code'];
      console.log(this.message);
      this.alertUser(response['code']);
    });
  }
  alertUser(code) {
    document.getElementById('alert-message').style.display = "block";
    if(code == 400) {
      document.getElementById('alert-message').style.backgroundColor = 'rgb(230, 95, 95)';
      document.getElementById('alert-message').style.color = 'white';
      this.message = 'Login Failed, User doesn\'t exists';
    } else { // code == 200
      document.getElementById('alert-message').style.backgroundColor = 'rgb(71, 199, 77)';
      document.getElementById('alert-message').style.color = 'white';
      this.message = "Login Successfull";
      this.router.navigate(['/create-invoice']);
    }
  }
  ngOnInit() {
  }

}
