import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
   
  `]
})
export class ListComponent implements OnInit {

  heroes: Heroe[] = [];
  errorExists: boolean = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.heroesService.getHeroes()
      .subscribe({
        next: (heroes) => {
          //Asignar el arreglo de heroes al arreglo proveniente del servicio
          this.heroes = heroes
        },
        error: (err) => {
          this.errorExists = true;
          this.heroes = []
        }
      });
  }

}
