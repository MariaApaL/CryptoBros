import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CabeceraComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CabeceraComponent
  ]
})
export class ComponentesModule { }
