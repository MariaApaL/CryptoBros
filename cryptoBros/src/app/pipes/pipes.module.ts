import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroBusquedaPipe } from './filtro-busqueda.pipe';
import { FiltroAlfabeticoPipe } from './filtro-alfabetico.pipe';



@NgModule({
  declarations: [
    FiltroBusquedaPipe,
    FiltroAlfabeticoPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FiltroBusquedaPipe,
    FiltroAlfabeticoPipe
  ]
})
export class PipesModule { }
