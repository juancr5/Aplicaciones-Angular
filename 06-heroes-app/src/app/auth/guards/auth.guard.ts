import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  //Asi ya se haya ingresado en la aplicacion no permite volver a entrar si el servicio de autenticacion no esta autenticado
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.verificaAutenticacion()
    .pipe(
      tap( estaAutenticado => {
        if( !estaAutenticado ) {
          this.router.navigate(['./auth/login']);
        }
      })
    )
  }

  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {

      return this.authService.verificaAutenticacion()
      .pipe(
        tap( estaAutenticado => {
          if( !estaAutenticado ) {
            this.router.navigate(['./auth/login']);
          }
        })
      );
  }
}
