import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {

  tareasPrueba:any[]=[
    {id:1,
    title:'TITULO 1',
    description:`Keep close to Nature's heart... and break clear away, once in awhile,
    and climb a mountain or spend a week in the woods. Wash your spirit clean.`,
    date:"15/09/2019",
    time:"12:00 AM",
    completed:false},
    {id:2,
    title:'TITULO 2',
    description:`Keep close to Nature's heart... and break clear away, once in awhile,
    and climb a mountain or spend a week in the woods. Wash your spirit clean.`,
    date:"15/09/2019",
    time:"12:00 AM",
    completed:true},
    {id:3,
    title:'TITULO 3',
    description:`Keep close to Nature's heart... and break clear away, once in awhile,
    and climb a mountain or spend a week in the woods. Wash your spirit clean.`,
    date:"15/09/2019",
    time:"12:00 AM",
    completed:true}
  ];

  constructor(public alertController: AlertController, public toastController:ToastController) { }

  ngOnInit() {
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
            console.log(`task: ${data.description} date: ${data.date} time: ${data.time}`);
            this.agregarTarea(data.description,data.date,data.time,data.title);
          }
        }
      ]
    });
    alert.present();
  }

  toggleCompleted(event){
    this.tareasPrueba.forEach((e)=>{
      if(e.id == event.id){
        e.completed = !e.completed;
      }
    });
    this.presentToastTask(event.completed,event.title);
  }

  agregarTarea(desc,fecha,horario,titulo){
    let indiceActual = this.tareasPrueba[this.tareasPrueba.length-1].id;
    indiceActual++;

    let nuevaTarea = {
      id: indiceActual,
      title:titulo,
      description:desc,
      date:fecha,
      time:horario,
      completed:false
    };

    this.tareasPrueba.push(nuevaTarea);
    console.log('Nueva tarea agregada');
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

}
