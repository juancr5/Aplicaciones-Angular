import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html'
})
export class InputCountryComponent implements OnInit {


  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  //El evento se emite cuando se deja de escribir en el input
  @Output() onDebounce:  EventEmitter<string> = new EventEmitter();

   //setea el valor del placeholder al valor asignado por el componente quue lo llamo
  @Input() placeholder:string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit()  {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit(valor);
    })
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  pressKey(event: any) {
    this.debouncer.next(this.termino);
  }

}
