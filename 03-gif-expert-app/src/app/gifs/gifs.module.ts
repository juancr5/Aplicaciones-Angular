import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifGridComponent } from './gif-grid/gif-grid.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    GifGridComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifGridComponent
  ]

})
export class GifsModule { }
