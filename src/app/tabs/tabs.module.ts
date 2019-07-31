import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import {environment} from '../../environments/environment';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [TabsPage],
  providers:[AngularFirestore]
})
export class TabsPageModule {}
