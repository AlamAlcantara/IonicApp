import { Component, OnInit } from '@angular/core';
import { NewsService } from '../_services/news.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
  article: any;
  constructor(private NewsService:NewsService) { }

  ngOnInit() {
    this.article = this.NewsService.currentArticle;
 
  }

}
