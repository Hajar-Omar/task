import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allNews: any[] = [];
  showenNews: any[] = [];
  feetTitle: string = '';

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((response) => {
      this.feetTitle = response.feed.title;
      this.allNews = response.items;
      this.showenNews = response.items.filter(function (ele, i) {  // to get the first 7
        if (i < 7) {
          return ele;
        }
      });
    });
  }

  viewMore(e: any) {
    let len = this.showenNews.length;  //7
    let currentNews: any[] = this.showenNews;
    this.allNews.forEach(function (ele, i) {
      if (i >= len && i < (len + 7)) {
        currentNews.push(ele);
      }
    })
  }

}
