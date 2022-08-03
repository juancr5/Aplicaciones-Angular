import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
})
export class CountryItemComponent implements OnInit {

  //pais!, el signo de admiracion es para que el valor no sea nulo y typescript no lo interprete como error
  country!: Country

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        //se desestructura el parametro id proveniente de la ruta activateRoute.params
        switchMap(({ id }) => this.countryService.getPaisPorAlpha(id)),
        //El tap recive el producto del observable
      )
      .subscribe({
        next: (country) => {this.country = country[0];}
      });
  }
}


