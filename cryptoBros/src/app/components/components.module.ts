import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { CardCryptoComponent } from './card-crypto/card-crypto.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardCryptoComponent,    
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports:[
    HeaderComponent,
    CardCryptoComponent,
    ArticlesComponent,
    ArticleComponent
  ]
})
export class ComponentsModule { }
