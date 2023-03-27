import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/libs/auth/auth.service';
import { AdminguardService } from 'src/app/libs/guards/adminguard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent {
  public username!: string;
  public password!:string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private guard: AdminguardService
  ) {}

  public async onSubmit() {
    const rez = await this.authService
      .login(this.username, this.password)
      .toPromise();


    if (this.guard.checkAdmin(rez.data.roles)) {
      this.router.navigateByUrl('/app/admin');
    } else {
      this.router.navigateByUrl('/app/client');
    }
    return rez;
  }

  public async logout() {
    this.authService.logout();
  }
}
