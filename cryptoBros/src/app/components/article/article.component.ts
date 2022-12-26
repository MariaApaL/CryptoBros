import { Component, OnInit, Input } from '@angular/core';
import {Article} from 'src/app/interfaces/new';
import { ActionSheetController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  {

  @Input() article!: Article;
  @Input() index!: number;
  
  constructor() {}

  
  openArticle(){


   
  }

  onOpenMenu(){}

  onShareArticle(){}

}
