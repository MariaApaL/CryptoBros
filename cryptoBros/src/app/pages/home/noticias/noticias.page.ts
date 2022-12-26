import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Article, NewsResponse } from 'src/app/interfaces/new';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  public articles: Article[] = [];


  constructor(private newService: NewsService ) { }

  ngOnInit() {
    this.newService.getNews()
    .subscribe(articles => this.articles.push(...articles))
  }

}
function resp(value: Object): void {
  throw new Error('Function not implemented.');
}

