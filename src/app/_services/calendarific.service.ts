import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.CALENDARIFIC_URL;
const API_KEY = environment.CALENDARIFIC_API_KEY;
@Injectable({
  providedIn: 'root'
})
export class CalendarificService {
  anio = new Date().getFullYear();
  constructor(private http: HttpClient) { }

  getHolidays(pais){
    //ejemplo url
    //https://calendarific.com/api/v2/holidays?&api_key=baa9dc110aa712sd3a9fa2a3dwb6c01d4c875950dc32vs&country=US&year=2019

    return this.http.get(`${API_URL}${API_KEY}&country=${pais}&year=${this.anio}`);

  }

  getCountries(){
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}
