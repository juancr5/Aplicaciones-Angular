import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano-color';

  //recibe un un numero entero y devuelve un sonido de acuerdo al los sonidos de la lista 
  aplicarSonido(numero: number): void {
    //crea un objeto de tipo Audio
    const audio = new Audio();
    audio.src = '../assets/sonidos/note' + numero + '.wav';
    audio.load();
    audio.play();
  }

}
