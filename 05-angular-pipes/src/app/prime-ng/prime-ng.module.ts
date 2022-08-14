import { NgModule } from '@angular/core';

//primeNG modules
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
//Importar paralelamente el BrowserAnimationsModule en el app.module.ts para que funcione el modulo el fieldsetModule
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
