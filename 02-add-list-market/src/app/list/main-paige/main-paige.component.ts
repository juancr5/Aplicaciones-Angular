import { Component } from '@angular/core';
import { Producto } from '../interfaces/list.interface';

@Component({
  selector: 'app-main-paige',
  templateUrl: './main-paige.component.html'
})
export class MainPaigeComponent {

  newItem: Producto = {
    nombre: 'Lechuga Crespa',
    valor: 1000
  }

  constructor() {}

}
