import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { CardCryptoComponent } from './card-crypto/card-crypto.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardCryptoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports:[
    HeaderComponent,
    CardCryptoComponent
  ]
})
export class ComponentsModule { }
