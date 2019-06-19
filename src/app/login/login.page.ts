import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm, FormBuilder , FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  LoginForm: FormGroup;
  isLoading = false;
  isLogin = true;
  showSplash = true;

  constructor(
    private router: Router,
    private loginservice : LoginService,
    private loadingCtrl: LoadingController ,
    private formBuilder: FormBuilder) {
      this.LoginForm = formBuilder.group({
        emailid: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });

 }
 
  

  errorMessages = {
    emailid: [
      { type: 'required', message: 'Email ID is required.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' }
    ]
  };
  
  ngOnInit() {
  }
onSubmit() {
    console.log("clicked...");

    if (this.LoginForm.invalid) {
    } else {
      //alert("jhjjjjk");
      this.loginservice.Login_reg(this.LoginForm.value)
      .subscribe(
        data => {
          console.log('dtaaaaaaaa>>>>>>>:' + data);
          console.log('this.LoginForm.value>>>>>>>>>>>>:', this.LoginForm.value);
          this.LoginForm.reset();
          this.router.navigate(['/dashboard/tabs/home']);
        },
        error => {
          console.log('error>>>>>>>:' + error);
          this.LoginForm.reset();
        }
      );

    }

  }
}
