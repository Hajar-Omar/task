import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService{
  url: string = 'https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition.rss';

  constructor( private httpClient: HttpClient) { }

   getAllNews(){
    return this.httpClient.get<Inew>(this.url);
  }

}
