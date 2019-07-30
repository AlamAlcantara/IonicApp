import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {TaskI} from '../../models/Task.Interface';

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {

  private todosCollection: AngularFirestoreCollection<TaskI>;
  private todos: Observable<TaskI[]>;

  constructor(public db: AngularFirestore) { 
    this.todosCollection = db.collection<TaskI>('tareas');
  }

  getTodos(){

  }
}
