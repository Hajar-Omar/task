import { HttpClient } from '@angular/common/http';
import { WOW } from 'node_modules/wowjs/dist/wow.min';
import { Component, AfterViewInit , OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent  implements AfterViewInit , OnInit {

  allNews: any = [];
  showenNews: any = [];

  feetTitle: object = {};

   wow = new WOW({live: true});


  constructor(private http: HttpClient) { }


  url: string = 'https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition.rss';



  ngAfterViewInit(){
    this.wow.init();
   };
  ngOnInit(): void {

    const getAllNews = this.http.get<Inew>(this.url);
    getAllNews.subscribe((response) => {


      this.feetTitle = response.feed;
      this.allNews = response.items;
      this.showenNews = response.items.filter(function (ele, i) {  // to get the first 7
        if (i < 7) {
          return ele;
        }
      });

      console.log(this.showenNews);
      console.log(this.allNews);

    });


  }


  viewMore(e) {
    let len = this.showenNews.length;  //7
    let currentNews: any[] = this.showenNews;
    this.allNews.forEach(function (ele, i) {
      if (i >= len && i < (len + 7)) {

        currentNews.push(ele);
      }
    })



    console.log(e);

  }

}
