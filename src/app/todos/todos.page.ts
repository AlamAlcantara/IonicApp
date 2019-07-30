import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import {map, timestamp} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


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

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {


  cargando:boolean = false;
  private tareasCollection: AngularFirestoreCollection<Tarea>;
  tareas: Observable<TareaId[]>;

  constructor(public alertController: AlertController, 
              public toastController:ToastController,
              public db: AngularFirestore)
  { 
    this.tareasCollection = db.collection<Tarea>('tareas');
  }

  ngOnInit() {
    this.cargando = true;
    this.tareas = this.tareasCollection.snapshotChanges().pipe(
      map(actions=> actions.map(a=>{
        const data = a.payload.doc.data() as Tarea;
        const id = a.payload.doc.id;
        this.cargando = false;
        return {id,...data};
      }))
      );
    console.log(this.tareas);
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header:'New task',
      message:'insert the data required for the new taks',
      inputs:[
        {
          name:'title',
          type:'text',
          placeholder:'Insert the title of the task'
        },
        {
        name:'description',
        type:'text',
        placeholder:'Insert the description of the task'
        },
        {
          name:'date',
          type:'date',
          placeholder:'Insert the date of the task'
        },
        {
          name:'time',
          type:'time',
          placeholder:'Insert the time of the task'
        }
      ],
      buttons:[
        {
          text:'Cancel',
          role:'cancel',
          handler:()=>{console.log('boton de cancelar presionado');}
        },
        {
          text:'Ok',
          role:'okay',
          handler:data=>{
            console.log(` tile: ${data.title} task: ${data.description} date: ${data.date} time: ${data.time}`);
            //this.agregarTarea(data.description,data.date,data.time,data.title);
            let timeStamp = (data.date+data.time)/1000;
            this.tareasCollection.add(
              {titulo: data.title,descripcion:data.description,completado:false,fecha:data.date, horario: data.time}
              );
          }
        }
      ]
    });
    alert.present();
  }

  cambiarEstado(item){
    item.completado = !item.completado;
    this.tareasCollection.doc(item.id).update(item);
    console.log(`Estado del item ${item.id} cambiado`);

    this.presentToastTask(item.completado,item.titulo);
  }

  async presentToastTask(completed:boolean,title){

    let msg = `Task ${title} Imcomplete`;
    if(completed){
      msg = `Task ${title} Completed :)`;
    }

    const toast = await this.toastController.create({
      message:msg,
      duration:3000,
      position:'top'
    });
    toast.present();
  }

  eliminarTarea(item){
    console.log(`Tarea ${item.id} eliminada`);
  }

}
