import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(public router: Router, public auth: AuthService) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
