import { Component, OnInit, Input } from '@angular/core';
import {Article} from 'src/app/interfaces/new';
import { ActionSheetController, Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  {

  @Input() article!: Article;
  @Input() index!: number;
  
  constructor(private iab: InAppBrowser,
    private platform: Platform,
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing) {}

  
  openArticle(){
    if (this.platform.is('ios') || this.platform.is('android')) {
      const browser = this.iab.create(this.article.url);
      browser.show();
      return;
    } else {
      window.open(this.article.url, '_blank')
    }
  }

  async onOpenMenu(){
    

    const actionSheet = await this.actionSheetCtrl.create({
      header:'Opciones',
      buttons:[{
        text:'Compartir',
        icon:'share-outline',
        handler:()=>this.onShareArticle()
      },
    {
      text:'Favorito',
      icon:'heart-outline',
      handler:() => this.onToggleFavorite()
    },
  {
    text:'Cancelar',
    icon: 'close-outline',
    role: 'cancel'
  }]
    });
    await actionSheet.present()
  }

  onShareArticle(){
    this.socialSharing.share(
      this.article.title,
      this.article.source.name,
      null,
      this.article.url
    )

  }

  onToggleFavorite(){
    console.log('Añadido a favorito')
  }

}
