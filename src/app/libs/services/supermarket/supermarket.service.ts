import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
  // { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },

})
export class SupermarketService {
  private basePath = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {
    // this.http.
  }

  public getSupermarkets(): Observable<any> {
    return this.http.get<any>(this.basePath + '/getAllSupermarkets');
  }

  public addSupermarket(name: string, address: string): Observable<any> {
    return this.http.post<any>(this.basePath + '/createSupermarket', {
      name,
      address,
    });
  }

  public deleteSupermarket(id: string): Observable<any> {
    return this.http.delete<any>(
      this.basePath + '/deleteSupermarketById/' + id
    );
  }

  public updateSupermarket(id: string, name: string, address: string):Observable<any> {
    return this.http.put<any>(this.basePath + '/updateSupermarket/' + id, {
      name,
      address,
    });
  }
}
