import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [`
     mat-card {  
      margin-top: 1rem;
    }

    span {  
      margin-left: 5px;
    }
  `]
})
export class HeroeCardComponent {

  // ! le dice a typescript que el valor de este atributo puede ser null u obviar el resto de la validacion
  @Input() heroe!: Heroe;

  constructor(
    private heroesService: HeroesService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }
  
  
  borrarHeroe() {

    const dialog = this.dialog.open(ConfirmComponent, {
      width: '350px',
      data: {...this.heroe}
    })

    //una vez obtenido el resultado del dialogo, se ejecuta el metodo de confirmacion
    dialog.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.heroesService.borrarHeroe(this.heroe.id!)
          .subscribe({
            next: (heroe) => {
              this.refresh();
              this.mostrarSnakbar('Registro Borrado');
            },
          });
        }
      }
    })

  }

  mostrarSnakbar(mensaje: string) {

    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500
    });

  }

  refresh(): void {
    window.location.reload();
  }


}
