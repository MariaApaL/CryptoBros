import { Component, OnInit, Input } from '@angular/core';
import {Article} from 'src/app/interfaces/new';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  {

  @Input() article!: Article;
  @Input() index!: number;
  usuario: string = 'aledelarosa2@gmail.com'
  constructor(private iab: InAppBrowser, private platform:Platform, private actionSheetCtrl:ActionSheetController,
    private socialSharing:SocialSharing) {}

  
  openArticle(){

    if(this.platform.is('ios') || this.platform.is('android')){
      const browser = this.iab.create(this.article.url)
      browser.show();
      return;
    }else{
      window.open(this.article.url, '_blank')
    }

   
  }

  async onOpenMenu(){

    const actionSheet = this.actionSheetCtrl.create({
      header:'Opciones',
      buttons:[{
        text:'Compartir',
        icon:'share-outline',
        handler: () => this.onShareArticle()
      },
      {
        text:'Cancelar',
        icon:'close-outline',
        role:'cancel'
      }
    ]
    })

    await (await actionSheet).present()
  }

  onShareArticle(){
    this.socialSharing.shareViaEmail(
      this.article.url,
      this.article.title,
      ['aledelarosa2@gmail.com']
      
    )
  }

}
