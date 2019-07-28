import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { IonicModule } from '@ionic/angular';

import { HolidaysPage } from './holidays.page';

const routes: Routes = [
  {
    path: '',
    component: HolidaysPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  declarations: [HolidaysPage]
})
export class HolidaysPageModule {}
