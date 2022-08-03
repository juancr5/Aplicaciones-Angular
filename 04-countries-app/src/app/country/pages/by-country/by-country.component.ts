import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent {

  //Pararmetro de entrada
  termino: string = '';
  errorExists: boolean = false;
  //Arreglo de countries que se pasa al *ngFor
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private countryService: CountryService) { }

  //Consume el servicio y lo muestra en el arreglo de countries para mostrarlo en table-country.component.html
  buscar(termino: string) {
    this.errorExists = false;
    this.termino = termino;

    this.countryService.buscarPais(this.termino)
      .subscribe({
        next: (countries) => {
          //Asignar el arreglo de countries al arreglo de proveniente del servicio
          this.countries = countries;
          console.log(countries);
        },
        error: (err) => {
          this.errorExists = true;
          this.countries = [];
        }
      });
  }

  //Consume el servicio y lo muestra en el arreglo de suggestedCountries para mostrarlo en el template de sugerencias
  sugerencias(termino: string) {
    this.errorExists = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.countryService.buscarPais(this.termino)
      .subscribe({
        next: (countries) => {

          this.suggestedCountries = countries.splice(0, 5)
        },
        error: (err) => {
          this.suggestedCountries = []
        }
      });
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }

}

