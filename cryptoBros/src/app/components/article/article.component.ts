import { Component, OnInit, Input } from '@angular/core';
import {Article} from 'src/app/interfaces/new';
import { ActionSheetController, Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  {

  @Input() article!: Article;
  @Input() index!: number;
  
  constructor(private iab: InAppBrowser,
    private platform: Platform) {}

  
  openArticle(){
    if (this.platform.is('ios') || this.platform.is('android')) {
      const browser = this.iab.create(this.article.url);
      browser.show();
      return;
    } else {
      window.open(this.article.url, '_blank')
    }
  }

  onOpenMenu(){}

  onShareArticle(){}

}
