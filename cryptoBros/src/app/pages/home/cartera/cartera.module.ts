import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteraPageRoutingModule } from './cartera-routing.module';

import { CarteraPage } from './cartera.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteraPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CarteraPage]
})
export class CarteraPageModule {}
