import { Component } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {

  constructor( private listService: ListService ) {}

  get productItems() {
    //.productItems es el nombre del getter del servicio
    return this.listService.productItems;
  }

}
