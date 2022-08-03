import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/list.interface';

//Decorador que permite injectar esta clase
@Injectable()
//El servicio es el unico lugar donde debe cambiarse el arreglo principal
export class ListService {

  //Arreglo Principal de Productos con propiedad estandar _private
  private _productItems: Producto[] = [
    {
      nombre: 'Papa Capira',
      valor: 1500
    }
  ];

  //Objetos mandados por referencia, para evitar se hace una copia de _productItems
  get productItems(): Producto[] {
    return [...this._productItems];
  }

  constructor() { }

  addProduct(productItems: Producto) {
    this._productItems.push(productItems);
  }

}