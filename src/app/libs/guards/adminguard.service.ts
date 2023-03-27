import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminguardService {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    const user = this.authService.getUser();
    if (this.checkAdmin(user.data.roles)) {
      return true;
    }
    this.router.navigateByUrl('/app/error');
    return false;
  }

  public checkAdmin(user: any) {
    let isAdmin = false;
    user.forEach((role: any) => {
      if (role.role === 'ADMIN') isAdmin = true;
    });
    return isAdmin;
  }
}
