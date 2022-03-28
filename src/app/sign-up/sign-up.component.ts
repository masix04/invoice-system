import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../utils/URLS';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  titles: any;
  UserSignUpValues: any;

  constructor(private http: HttpClient, public urls: URLS) {
    this.titles = [
      'Owner', 'Employee'
    ];
  }
  signUpForm = new FormGroup({
    UserName : new FormControl('',Validators.required),
    UserEmail : new FormControl('',Validators.required),
    UserTitle : new FormControl('',Validators.required),
    UserPhone : new FormControl('',Validators.compose([Validators.required, Validators.pattern('[+]{1}[0-9]{3}[0-9]{7}')])),
    UserPassword : new FormControl('',Validators.compose([Validators.required, Validators.minLength(8)])),
    UserReTypePassword : new FormControl('',Validators.compose([Validators.required, Validators.minLength(8)]))
  });
  // get UserName() {
  //   return this.UserName.get('UserName');
  // }

  onSignUp(userData: any) {
    this.UserSignUpValues = userData;
    if(this.matchPasswords(userData) == true)
    {
      this.signUpRequest();
    } else {
      console.log('Password Not Matched! Please makeSure that the password and Re-type Password Matches.');
    }
  }

  matchPasswords(userData) {
    if(userData.UserPassword != '' && userData.UserReTypePassword != '') {
      if(userData.UserPassword == userData.UserReTypePassword) {
        return true;
      }else {
        return false;
      }
    }
  }

  BtnAnimate(btnType) {
    var elm = document.getElementById('signUp');
    console.log(elm);
    if(btnType == 'signUp') {
      elm.classList.add('signUpBtnAnimate');
    } else if(btnType == 'logIn') {
      elm.classList.add('logInBtnAnimate');
    }
  }
  signUpRequest() {
    let url = this.urls.WorkBaseUrl+'Authentication/signUpAction.php?name='+this.UserSignUpValues.UserName+'&title='+this.UserSignUpValues.UserTitle
      +'&email='+this.UserSignUpValues.UserEmail+'&phone='+this.UserSignUpValues.UserPhone+'&password='+this.UserSignUpValues.UserPassword;
    this.http.get(url).subscribe({
      next: (response)=> console.log(response),
      error: (error) => console.log(error),
    });
  }
  ngOnInit() {
  }

}
