import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Camilo';
  genero: string = 'Masculino';
  invitacionMapa = {
    'Masculino': 'invitarlo',
    'Femenino': 'invitarla'
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  // KeyValue Pipe
  persona = {
    nombre: 'Camilo',
    edad: 30,
    direccion: 'Medellin, Colombia'
  };

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ];

  // Async Pipe
  //interval emite valores cada 2 segundos hasta que se cancele el observable
  miObservable = interval(2000); // 0,1,2,3,4,5,6,

  //promesa resuelta despues de 5 segundos
  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Promesa Resuelta');
    }, 5000);

  });

  //Metodos
  cambiarCliente() {
    this.nombre = 'Juana';
    this.genero = 'Femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }


}
