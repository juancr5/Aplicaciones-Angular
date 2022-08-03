import { Component, Input} from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html'
})
export class TableCountryComponent {

  @Input() dataTable: Country[] = [];

  constructor() { }


}
