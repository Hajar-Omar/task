import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news.service'
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  blockDetails: object = {};
  id: any = 0;
  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    //get details news 
    this.id = this.activatedRoute.snapshot.params['id'];  //get url parameters
    this.newsService.getAllNews().subscribe((response) => {
      // response.items.forEach(function(ele,i){
      //    if( i === this.id){

      //  this.blockDetails = ele;
      this.blockDetails = response.items[this.id];
      //  }
      // })
      console.log(this.blockDetails)
    });

  }

}
