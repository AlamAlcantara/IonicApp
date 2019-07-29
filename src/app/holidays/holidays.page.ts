import { Component, OnInit } from '@angular/core';
import { CalendarificService } from '../calendarific.service';
import {faGlassCheers} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.page.html',
  styleUrls: ['./holidays.page.scss'],
})
export class HolidaysPage implements OnInit {

  paises:any;
  festividades:any;
  pais:any;
  cargando:any;
  faGlassCheers = faGlassCheers;
  constructor(private calendarificService : CalendarificService) { }

  ngOnInit() {
    this.cargarPaises();
  }

  cargarPaises(){
    this.calendarificService.getCountries().subscribe(data=>{
      this.paises = data;
      console.log(this.paises);
    });
  }

  cargarfestividades(){
    this.calendarificService.getHolidays(this.pais).subscribe(data=>{
      this.festividades= data;
      console.log(this.festividades);
      this.cargando =false;
    });
  }

  onChange($event){
    this.cargando =true;
    this.pais = $event.target.value;
    console.log(this.pais);
    this.cargarfestividades();
  }

}
