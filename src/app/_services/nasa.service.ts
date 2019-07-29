import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { forEach } from '@angular/router/src/utils/collection';

const NASA_API_KEY = environment.NASA_API_KEY;
const NASA_URL = environment.NASA_URL;

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private datos: any = [];

  constructor(private http: HttpClient) { }

  getData(busqueda:string){
    return this.http.get(`${NASA_URL}search?q=${busqueda}`);
  }

  getPhoto(url){
    return this.http.get(url);
  }
}
