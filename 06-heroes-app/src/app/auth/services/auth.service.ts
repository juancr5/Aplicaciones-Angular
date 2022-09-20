import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //trae la variable de entorno del archivo environment.ts
  private baseUrl: string = environment.baseUrl;

  //la variable de autentificacion se solo puede contener un valor o esta vacio
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! }
  }

  constructor(private http: HttpClient) { }


  verificaAutenticacion(): Observable<boolean> {

    if ( !localStorage.getItem('token') ) {
      return of(false);
    }

    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/2`)
              .pipe(
                map( auth => {
                  this._auth = auth;
                  return true;
                })
              );
  }


  login() {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/2`)
      .pipe(
        tap(auth => this._auth = auth),
        tap(auth => localStorage.setItem('token', auth.id.toString()))
      )
  }

  //Al salir limpia la variable de autenticacion reestableciendo el valor a undefined
  logout() {
    this._auth = undefined;
  }


}