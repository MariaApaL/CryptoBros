import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesCryptoPageRoutingModule } from './detalles-crypto-routing.module';

import { DetallesCryptoPage } from './detalles-crypto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesCryptoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetallesCryptoPage]
})
export class DetallesCryptoPageModule {}
