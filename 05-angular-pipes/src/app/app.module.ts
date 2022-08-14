import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
//Modulo Personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el idioma local de la aplicacion
import LocaleEs from '@angular/common/locales/es-CO';
import LocaleIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';
registerLocaleData(LocaleEs);
registerLocaleData(LocaleIt);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    //Cambiar el locale de la aplicación
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
