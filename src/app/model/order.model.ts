import { Injectable } from '@angular/core';
import { Cart } from './cart.model';


@Injectable()

export class Order {
   public id: number;
   public name: string;
   public adress: string;
   public city: string;
   public zip: string;
   public state: string;
   public country: string;
   public shipped: boolean = false;

   constructor(public cart: Cart){ }
    clear() {
        this.id = null;
        this.name = this.adress = this.city = null;
        this.zip = this.country = this.state = null;
        this.shipped = false;
        this.cart.clear();
    }
}
