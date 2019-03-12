
import { WOW } from 'node_modules/wowjs/dist/wow.min';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements AfterViewInit, OnInit {

  allNews: any[] = [];
  showenNews: any[] = [];
  feetTitle: string = '';
  wow = new WOW({ live: true });

  constructor(private newsService: NewsService) { }


  ngAfterViewInit() {
    this.wow.init();
  };
  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((response) => {
console.log(response)
      this.feetTitle = response.feed.title;
      this.allNews = response.items;
      this.showenNews = response.items.filter(function (ele, i) {  // to get the first 7
        if (i < 7) {
          return ele;
        }
      });
      // for (let index = 0; index < this.allNews.length; index++) {
      //   this.allNews[index]["id"] = index;
      // }
      this.allNews.forEach(function (ele, i) {
       ele.id = i;
      })
      console.log(this.allNews)
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
