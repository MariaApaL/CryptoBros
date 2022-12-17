import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptosPageRoutingModule } from './cryptos-routing.module';

import { CryptosPage } from './cryptos.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CryptosPage]
})
export class CryptosPageModule {}
