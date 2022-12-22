import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
<<<<<<< HEAD
import { CardCryptoComponent } from './card-crypto/card-crypto.component';
=======
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
>>>>>>> rubik



@NgModule({
  declarations: [
    HeaderComponent,
<<<<<<< HEAD
    CardCryptoComponent
=======
    ArticleComponent,
    ArticlesComponent
>>>>>>> rubik
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports:[
    HeaderComponent,
<<<<<<< HEAD
    CardCryptoComponent
=======
    ArticlesComponent
>>>>>>> rubik
  ]
})
export class ComponentsModule { }
