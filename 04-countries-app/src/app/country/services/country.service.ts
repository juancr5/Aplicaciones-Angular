import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable} from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  //Api tomada de https://restcountries.com/
  private apiUrl: string = `https://restcountries.com/v3.1`;


  constructor( private http: HttpClient ) { }
  
  //Servicio para buscar un pais por su nombre
  buscarPais( termino: string ): Observable<Country[]> {

    termino = termino.trim().toLocaleLowerCase();
    const url = `${ this.apiUrl }/name/${ termino }`;
    
    return this.http.get<Country[]>( url);
  }

  //Servicio para buscar un pais por su capital
  buscarCapital( termino: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  //Servicio para buscar un pais por su region
  buscarRegion( termino: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  //devuelve un objeto de tipo Country[]
  getPaisPorAlpha( id: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country[]>( url );
  }

}
