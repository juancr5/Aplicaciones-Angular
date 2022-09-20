import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit, AfterViewInit {

  // Parametrización de la referencia al formulario
  @ViewChild('miFormulario') miFormulario!: NgForm;

  //Informacion inicial para setear el formulario
  initForm = {
    producto: 'RTX 4080ti',
    precio: 10,
    existencias: 10
  }

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  nombreValido(): boolean {
    return this.miFormulario?.form.controls['precio']?.invalid
      && this.miFormulario?.form.controls['precio']?.touched;
  }


  precioValido(): boolean {
    return this.miFormulario?.form.controls['precio']?.touched
      && this.miFormulario?.form.controls['precio']?.value < 0;
  }

  existenciasValido(): ValidationErrors | null {
    return this.miFormulario?.form.controls['existencias']?.errors;
  }

  // guardar( miFormulario: NgForm ) {
  guardar() {
    // console.log( this.miFormulario );
    console.log('Formulario Enviado', this.miFormulario.form.value);


    this.miFormulario.resetForm({
      producto: 'Cosa',
      precio: 0,
      existencias: 0
    });
  }
}
