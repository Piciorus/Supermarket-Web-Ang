import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/libs/auth/auth.service';
import { Product } from 'src/app/libs/models/Product';
import { ShoppinglistService } from 'src/app/libs/services/shoppinglist/shoppinglist.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  
})

export class ClientComponent {
  public products: Array<Product> = [];

  constructor(
    private authService: AuthService,
    private shoppingListService: ShoppinglistService
  ) {}

  async logout() {
    this.authService.logout();
  }

  public getAllProducts() {
    this.shoppingListService.getAllProducts().subscribe((products) => {
      
      this.products = products; // initialize to an empty array if no data
      console.log(products)
    });
  }
}
