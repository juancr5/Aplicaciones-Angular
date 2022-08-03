import { Component, Input, } from '@angular/core';
import { Producto } from '../interfaces/list.interface';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html'
})
export class AddProductsComponent{

  //inyectar el Servvicio	
  constructor( private listService: ListService ) {}

  //desde el [(ngModel)] del input le asigna el valor al nombre del producto
  @Input()newItem: Producto = {
    nombre: '',
    valor: 0
  };


  agregar() {
    if (this.newItem.nombre.trim().length === 0) { return; }

    this.listService.addProduct( this.newItem );

    this.newItem = {
      nombre: '',
      valor: 0
    }

  }

}
