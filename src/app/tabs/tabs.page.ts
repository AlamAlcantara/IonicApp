import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Tarea, TareaId} from '../todos/todos.page';
import { Observable,of, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  cantTareasIncompleta:number;

  // Observador = {
  //   next: x=> this.cantTareasIncompleta = x
  // };
  // objObservable = of(this.actualizarCantTareasIncompletas()); 

  private tareasCollection: AngularFirestoreCollection<Tarea>;

  constructor(public db: AngularFirestore) {
    this.tareasCollection = db.collection('tareas',ref=>ref.where('completado','==',false));

  //  this.objObservable.subscribe(this.Observador);    
  }

  ngOnInit(){
   //this.cantTareasIncompletas = this.actualizarCantTareasIncompletas();
  }

  actualizarCantTareasIncompletas():Observable<number>{
    // this.tareasCollection.get().toPromise().then(data=>{
    //   console.log(data);
    //   return data.docs.length;
    // });
    let res= this.tareasCollection
    .snapshotChanges().pipe(
      map(res=> {return res.length})
    );
    console.log(res);
    return res;
  }
}
