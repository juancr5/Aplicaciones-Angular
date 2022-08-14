import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private primeNGConfig: PrimeNGConfig) {}

  //Configuracion de algunos componentes de PrimeNG con efesecto de animaciones
  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }
}

