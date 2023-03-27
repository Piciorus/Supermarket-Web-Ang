import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private basePath = environment.apiUrl;
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.user = this.userSubject.asObservable();
  }

  public login(username: string, password: string) {
    return this.http
      .post<any>(this.basePath + '/login', { username, password })
      .pipe(
        map((user: any) => {
          user.authData = window.btoa(username + ':' + password);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/auth/login');
  }

  public getUser(): any {
    return this.userSubject.value;
  }


}
