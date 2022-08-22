import { Component} from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  constructor(private heroesService: HeroesService) { }

  busquedaSugerida() {
    this.heroesService.getSugerencias(this.termino.trim())
      .subscribe({
        next: (heroes) => {
          //Asignar el arreglo de heroes al arreglo proveniente del servicio
          this.heroes = heroes
        }
      });

  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {

    //Controlar que el evento no sea nulo 404
    if (!event.option.value) {
      this.heroeSeleccionado = undefined;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroeById(heroe.id!)
      .subscribe({
        next: (heroe) => {
          //Asignar el arreglo de heroes al arreglo proveniente del servicio
          this.heroeSeleccionado = heroe
        }
      });

  }
}
