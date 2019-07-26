import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: '../news/news.module#NewsPageModule'
          }
        ]
      },
      {
        path: 'news-single',
        children: [
          {
            path: '',
            loadChildren: '../news-single/news-single.module#NewsSingleModule'
          }
        ]
      },
      {
        path: 'nasa',
        children: [
          {
            path: '',
            loadChildren: '../nasa/nasa.module#NasaPageModule'
          }
        ]
      },
      {
        path: 'holidays',
        children: [
          {
            path: '',
            loadChildren: '../holidays/holidays.module#HolidaysPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
