import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = false;

  constructor() { }

  login(credentials:any): boolean {
    console.log(credentials)
    if (credentials.username == 'user' && credentials.password == 'password') {  // Replace with real authentication logic
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
