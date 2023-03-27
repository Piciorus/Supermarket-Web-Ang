import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Supermarket } from '../../models/Supermarket';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  private basePath = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public getAllProducts():Observable<any>{
    return this.http.get<any>(this.basePath + '/getAllProducts');
  }

  public getProductById(id:string){
    return this.http.get<any>(this.basePath + '/getProductById/' + id);
  }

  public addProductToShoppingList(brand:string,name:string,category:string,expirationDate:string,price:number,supermarket:Supermarket){
    return this.http.post<any>(this.basePath + '/addProduct',{brand,name,category,expirationDate,price,supermarket});
  }
}
