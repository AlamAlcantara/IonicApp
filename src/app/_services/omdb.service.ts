import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const API_URL = environment.MODB_URL;
const API_KEY = environment.OMDB_KEY;
@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private http: HttpClient) { }

  getPelicula(pelicula){
    return this.http.get(`${API_URL}?t=${pelicula}&apikey=c881ae44`);
  }
}
