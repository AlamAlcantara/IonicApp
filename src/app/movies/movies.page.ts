import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../omdb.service';
import { ToastController } from '@ionic/angular';
import {faFilm} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  busqueda: string;
  pelicula:any;
  error:any;
  cargando =false;
  faFilm = faFilm;

  constructor(private moviesService: OmdbService, public toastController:ToastController) { }

  ngOnInit() {
   // this.cargarPelicula();
  }

  cargarPelicula(){
    
    if(this.busqueda == null || this.busqueda == undefined){
      this.crearToast('The name of the movie is required');
    }else{
      this.cargando = true;
      this.moviesService.getPelicula(this.busqueda).subscribe(data=>{
        //console.log(data);
        if(data.hasOwnProperty('Error')){
          console.log('hubo un error');
          this.error= data;
          this.cargando = false;
          this.crearToast(this.error.Error);
        }else{
          this.pelicula = data;
          this.cargando = false;
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
