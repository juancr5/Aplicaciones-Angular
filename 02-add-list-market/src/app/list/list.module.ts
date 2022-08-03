import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPaigeComponent } from './main-paige/main-paige.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductsComponent } from './products/products.component';
import { ListService } from './services/list.service';

@NgModule({
  declarations: [
    MainPaigeComponent,
    AddProductsComponent,
    ProductsComponent
  ],
  exports: [
    MainPaigeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    ListService
  ]
})
export class ListModule { }
