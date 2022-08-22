import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    // si no existe el id devuelve el no-image
    if (!heroe.id && !heroe.alt_img) {
      return 'assets/no-image.png';
      // si existe heroe.alt_img devuelve la imagen
    } else if (heroe.alt_img) {
      return heroe.alt_img;
    } else {
      return `assets/heroes/${heroe.id}.jpg`;
    }
  }

  myFunction() {
    console.log('No existe la imagen');
  }

}