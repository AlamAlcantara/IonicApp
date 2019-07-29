import { Component, OnInit } from '@angular/core';
import { NewsService } from '../_services/news.service';
import { Router } from '@angular/router';
import { NewsSinglePage } from '../news-single/news-single.page';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news:any;
  faNewspaper = faNewspaper;

  constructor(private newsService:NewsService,private router: Router) { }

  ngOnInit() {
    this.newsService
    .getNews('top-headlines?country=us&category=business')
    .subscribe(data=>{
        console.log(data);
        this.news= data;
      },error=>{
        console.log('error al consultar la API');
      });
  }

  onGoToSingelNewsPage(item){
    this.newsService.currentArticle = item;
    console.log(this.newsService.currentArticle);
    this.router.navigate(['/news-single']);
  }

}
