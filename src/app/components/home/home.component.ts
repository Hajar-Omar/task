import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allNews : any = [];
  showenNews: any = [];
  feetTitle : object = {};

  constructor(private http: HttpClient) { }

  url: string = 'https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition.rss';


  ngOnInit(): void {
    const getAllNews = this.http.get(this.url);
    getAllNews.subscribe((response) => {
      this.feetTitle = response.feed.title;
      this.allNews = response.items;
      this.showenNews = response.items.filter(function(ele, i) {  // to get the first 7
        if(i < 7){
          return ele;
        }
      });

      console.log(this.showenNews);
      console.log(this.allNews);

    });


  }

 viewMore(e) {
     const len = this.showenNews.length;  //7
     const currentNews : any[] = this.showenNews;
    this.allNews.forEach(function(ele, i){
if( i >= len && i < (len + 7)) {

  currentNews.push(ele)
}
     });


console.log(e);

  }

}
