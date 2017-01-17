import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class AdminGuardService implements CanActivate{

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate() {
    if (this.authService.loggedIn() && this.authService.isAdmin()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
