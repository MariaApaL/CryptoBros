import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BinanceService {

  constructor(public http:HttpClient) { }

  obtenerDatos(){
    return this.http.get('https://api.binance.com')
  }

}
