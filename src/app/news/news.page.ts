import { Component, OnInit } from '@angular/core';
import { NewsService } from '../_services/news.service';
import { Router } from '@angular/router';
import { NewsSinglePage } from '../news-single/news-single.page';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons'
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news:any;
  category:string = '';
  faNewspaper = faNewspaper;

  constructor(private newsService:NewsService,private router: Router,
              public toastController:ToastController ) { }

  ngOnInit() {
    this.newsService
    .getNews('top-headlines?country=us&category=business')
    .subscribe(data=>{
        console.log(data);
        this.news= data;
      },error=>{
        console.log('error al consultar la API');
        this.presentToast();
      });
  }

  onGoToSingelNewsPage(item){
    this.newsService.currentArticle = item;
    console.log(this.newsService.currentArticle);
    this.router.navigate(['/news-single']);
  }

  searchByCategory(event){
    this.category = event.target.value;
    this.newsService
    .getNews(`top-headlines?country=us&category=${this.category}`)
    .subscribe(data=>{
        console.log(data);
        this.news= data;
      },error=>{
        console.log('error al consultar la API');
        this.presentToast();
      });
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message:'An error has ocurred, please try later!',
      duration:5000
    });
    toast.present();
  }

}
