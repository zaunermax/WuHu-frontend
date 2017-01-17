import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { tokenNotExpired, JwtHelper, AuthHttp } from 'angular2-jwt';
import { NotificationsService } from "angular2-notifications/lib/notifications.service";

@Injectable()
export class AuthService {

  private jwtHelper = new JwtHelper();

  constructor(public authHttp: AuthHttp,
              public router: Router,
              public notificationService: NotificationsService) { }

  private saveJwt(token): void {
    if (token) {
      localStorage.setItem('id_token', token);
    }
  }

  public isAdmin(): boolean {
    const token = localStorage.getItem('id_token');
    return token ? this.jwtHelper.decodeToken(token).role === 'admin' : false;
  }

  public login(email: string, password: string) {
    this.authHttp.post('/auth/login', JSON.stringify({ email, password }))
      .subscribe(response => {
          this.saveJwt(response.json().token);
          this.router.navigate(['']);
        },
        error => {
          this.notificationService.error("Login Error", "Wrong Email or Password");
        });
  }

  public loggedIn() : boolean {
    return tokenNotExpired();
  }

  public logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['/login']);
  }
}
