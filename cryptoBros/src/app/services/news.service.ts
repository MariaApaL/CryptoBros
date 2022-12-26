import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interfaces/new';
import { Observable, map } from 'rxjs';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews():Observable<Article[]>{
   return this.http.get<NewsResponse>(`https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt`,{
    params:{
      apiKey: apiKey
     }
   }).pipe(
    map(({articles}) => articles));
  }


}
