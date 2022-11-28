import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IonicModule } from '@ionic/angular';
import { MenuTabComponent } from './menu-tab/menu-tab.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    MenuTabComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CabeceraComponent,
    MenuTabComponent
  ]
})
export class ComponentesModule { }
