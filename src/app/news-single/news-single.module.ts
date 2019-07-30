import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsSinglePage } from './news-single.page';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: NewsSinglePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewsSinglePage]
})
export class NewsSinglePageModule {}
