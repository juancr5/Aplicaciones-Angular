import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
  
})
export class ResultsComponent {

  //injectar el servicio de Gifs
  constructor(private gifsService: GifsService) { }

  
  get resultados() {
    return this.gifsService.resultados;
  }

}
