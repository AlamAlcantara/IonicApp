import { Component, OnInit, NgModule } from '@angular/core';
import { NasaService } from '../nasa.service';
//import { AnyMxRecord } from 'dns';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.page.html',
  styleUrls: ['./nasa.page.scss'],
})
export class NasaPage implements OnInit {
  datos: any;
  //busqueda:string;

  constructor(private NasaService: NasaService) { }

  ngOnInit() {

  }

  busquedaNasa(busqueda){
    this.NasaService.getData(busqueda).subscribe(data=>{
      //console.log(data);
      this.datos = data;
      console.log(this.datos);
    },error=>{
      console.log(error);
    });
  }

  onChange($event){
    console.log($event.target.value);
    this.busquedaNasa($event.target.value);
  }

}
