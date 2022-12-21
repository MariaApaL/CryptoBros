import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ArticleComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    ArticlesComponent
  ]
})
export class ComponentsModule { }
