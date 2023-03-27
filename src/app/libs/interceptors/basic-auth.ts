import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = this.authService.getUser();
    const isLoggedIn = user.data.username;
    const isUrl = request.url.startsWith(environment.apiUrl);
    const isLoginRequest = request.url.includes('/login');
    
    if (isLoggedIn && isUrl && !isLoginRequest) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${user.authData}`,
        },
      });
    }

    return next.handle(request);
  }
}
