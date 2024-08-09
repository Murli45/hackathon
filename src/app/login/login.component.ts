import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    // if (this.loginService.login(this.username, this.password)) {
    //   this.router.navigate(['/main']);
    // } else {
    //   this.loginFailed = true;
    // }

    if (!this.signInForm.valid)
      return;

    if (this.loginService.login(this.signInForm.value)){
      this.router.navigate(['/main']);
    } else {
      // use toastr service
    }

  }

}
