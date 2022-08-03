import { Component} from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor( private gifsService: GifsService  ) { }

  //Funcion para obtener el historial
  get historial() {
    return this.gifsService.historial;
  }

  buscar( valor: string ) {
    this.gifsService.buscarGifs( valor );
  }

}
