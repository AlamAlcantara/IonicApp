import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Tarea} from '../todos/todos.page';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  cantTareasIncompleta:number = 0;
  private tareasCollection: AngularFirestoreCollection<Tarea>;

  constructor(public db: AngularFirestore) {
    this.tareasCollection = db.collection('tareas',ref=>ref.where('completado','==',false));
  }

  ngOnInit(){
   //this.cantTareasIncompletas = this.actualizarCantTareasIncompletas();
   this.actualizarCantTareasIncompletas().subscribe(data=>{
     this.cantTareasIncompleta = data;
     console.log(data);
   }); 
  }

  actualizarCantTareasIncompletas():Observable<number>{
    let res= this.tareasCollection
    .snapshotChanges().pipe(
      map(res=> {
        return res.length;
      })
    );
    return res;
  }
}
