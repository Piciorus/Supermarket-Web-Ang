import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    const user = this.authService.getUser();
    if (this.checkClient(user.data.roles)) {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }

  checkClient(user: any) {
    let isAdmin = false;
    user.forEach((role: any) => {
      if (role.role === 'CLIENT') isAdmin = true;
    });
    return isAdmin;
  }
}
