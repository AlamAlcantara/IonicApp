import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {TaskI} from '../../models/Task.Interface';

export interface Tarea {
  titulo:string;
  descripcion:string;
  completado:boolean;
  fecha:Date;
  horario:string;
}

export interface TareaId extends Tarea{
  id:string;
}

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {

  private tareasCollection: AngularFirestoreCollection<Tarea>;
  tareas: Observable<TareaId[]>;
  tareasIncompletas = 0;
  tareasCompletas = 0;
  cantTareas = 0;

  constructor(private db: AngularFirestore) { 
    console.log('servicio de tareas activo');
    this.tareasCollection = db.collection<Tarea>('tareas');
    this.tareas = this.tareasCollection.snapshotChanges().pipe(
      map(actions=> actions.map(a=>{
        const data = a.payload.doc.data() as Tarea;
        const id = a.payload.doc.id;
        return {id,...data};
      }))
      );
  }

  getTodos(){}

  getTareasIncompletas(){
    
    this.tareasCollection.get().toPromise().then(data=>{
      this.cantTareas = data.size;
    });

    return this.cantTareas;
  }
}
