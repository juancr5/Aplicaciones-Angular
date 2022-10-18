import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      description: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      description: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    //Si router.url incluye la palabra editar, deja llamar al servicio para obtener el heroe
    if (this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroeById(id))
      )
      .subscribe({
        next: (heroe) => { this.heroe = heroe },
      });
  }

  //Metodos 
  guardarHeroe() {

    //Validar que el heroe no este vacio
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      // Actualizar  
      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe({
          next: () => {
            this.router.navigate(['/heroes']);
            this.mostrarSnakbar('Registro actualizado');
          },
        });
    } else {
      // Crear
      this.heroesService.agregarHeroe(this.heroe)
        .subscribe({
          next: (heroe) => {
            this.router.navigate(['/heroes/editar', heroe.id]);
            this.mostrarSnakbar('Registro creado');
          },
        });
    }
  }

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
              this.router.navigate(['/heroes']);
            },
          });
        }
      }
    })

  }


  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'ok!', {
      duration: 2500
    });

  }

}

