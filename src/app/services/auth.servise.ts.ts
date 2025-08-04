import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiseTs {
  isLoggedIn  = signal<boolean>(this.hasToken());

  login(){
    localStorage.setItem('token','myToken')
    this.isLoggedIn.set(true);
  }

  logOut(){
    localStorage.removeItem('token')
    this.isLoggedIn.set(false);
  }

  check(): boolean{
    return this.hasToken();
  }

  private hasToken():boolean{
    return !!localStorage.getItem('token')
  }
}
