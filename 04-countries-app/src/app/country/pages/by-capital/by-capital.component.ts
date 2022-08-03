import { Component} from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html'
})
export class ByCapitalComponent {

  //Pararmetro de entrada
  termino: string = '';
  errorExists: boolean = false;
  //Arreglo de paises que se pasa al *ngFor
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  buscar(termino: string) {
    this.errorExists = false;
    this.termino = termino;

    this.countryService.buscarCapital(this.termino)
      .subscribe({
        next: (countries) => {
          //Asignar el arreglo de countries al arreglo de proveniente del servicio
          this.countries = countries;
        },
        error: (err) => {
          this.errorExists = true;
          this.countries = [];
        }
      });
  }

}
