import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';

import { TodosPage } from './todos.page';
import { AngularFirestore } from '@angular/fire/firestore';

const routes: Routes = [
  {
    path: '',
    component: TodosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [TodosPage],
  providers:[AngularFirestore]
})
export class TodosPageModule {}
