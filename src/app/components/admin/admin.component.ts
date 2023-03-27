import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/libs/auth/auth.service';
import { Supermarket } from 'src/app/libs/models/Supermarket';
import { SupermarketService } from 'src/app/libs/services/supermarket/supermarket.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public supermarkets: Array<Supermarket> = [];
  public address!: string;
  public name!: string;
  public newAddress: string = '';
  public newName: string = '';

  constructor(
    private supermarketservice: SupermarketService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  public logout() {
    this.authService.logout();
  }

  public getsupermarkets() {
    this.supermarketservice.getSupermarkets().subscribe((supermarkets) => {
      this.supermarkets = supermarkets.data;
    });
  }

  public addSupermarket(name: string, address: string) {
    this.supermarketservice
      .addSupermarket(name, address)
      .subscribe((supermarket) => {
        this.supermarkets.push(supermarket.data);
        this.getsupermarkets();
      });
  }

  public async deleteSupermarket(id: string) {
    await this.supermarketservice.deleteSupermarket(id).toPromise();
    this.getsupermarkets();
  }

  public async updateSupermarket(id: string, name: string, address: string) {
    await this.supermarketservice
      .updateSupermarket(id, name, address)
      .toPromise();
    this.getsupermarkets();
  }
}
