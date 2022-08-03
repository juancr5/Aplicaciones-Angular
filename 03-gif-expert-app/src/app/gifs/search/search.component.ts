import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  //referencia local especificada
  //! operador no nulo propio de TypeScript
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;


  //injectar el servicio de Gifs
  constructor(private gifsService: GifsService) { }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length > 2) {

      //Asigna el valor del campo de texto al servicio de gifsService.buscarGifs
      this.gifsService.buscarGifs(valor)

      //Resetear la caja de texto a su valor
      this.txtBuscar.nativeElement.value = ''; 

    }



  }
}
