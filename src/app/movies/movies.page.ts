import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../omdb.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  busqueda: string;
  pelicula:any;
  error:any;

  constructor(private moviesService: OmdbService, public toastController:ToastController) { }

  ngOnInit() {
   // this.cargarPelicula();
  }

  cargarPelicula(){

    if(this.busqueda == null || this.busqueda == undefined){
      this.crearToast('The name of the movie is required');
    }else{
      this.moviesService.getPelicula(this.busqueda).subscribe(data=>{
        //console.log(data);
        if(data.hasOwnProperty('Error')){
          console.log('hubo un error');
          this.error= data;
          this.crearToast(this.error.Error);
        }else{
          this.pelicula = data;
          console.log(this.pelicula);
        }
      });
    }
  }

  async crearToast(mensaje){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000
    });

    toast.present();
  }

}
