import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  authStatus: boolean;
  teachers;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient ) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
    this.initForm();

    this.http.get('http://localhost:8090/teachers').subscribe(data => this.teachers = data );
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    console.log(this.teachers);
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    this.authService.signIn(email, password).then(
      () => {this.authStatus = this.authService.isAuth;
        this.router.navigate(['home']);
        console.log('sign in successfully');
      }
    ).then(() => {
      this.router.navigate(['home']);
    }).catch(() => { this.errorMessage = "email ou mot de passe sont erronés"; })
    /*const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    
    this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );*/
    /*firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }*/
  }
}
