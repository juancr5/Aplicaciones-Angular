import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button {
      margin-right: 8px;
    }
  `]
})
export class ByRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  //Arreglo de paises que se pasa al *ngFor
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva)
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {

    //Evita voler a cargar la lista de paises al presionar una region
    if (region === this.regionActiva) { return; }

    this.regionActiva = region;
    this.countries = [];

    this.countryService.buscarRegion(region)
      .subscribe({
        next: (countries) => {
          //Asignar el arreglo de countries al arreglo de proveniente del servicio
          this.countries = countries;
        }
      });
  }
}