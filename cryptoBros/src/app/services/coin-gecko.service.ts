import { CoinDetail } from './../interfaces/coin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from '../interfaces/coin';

@Injectable({
  providedIn: 'root'
})
export class CoinGeckoService {

  constructor(private http:HttpClient) { }

  //OBTENER UNA LISTA DE UN NUMERO DE CRYPTOMONEDAS
  obtenerListaCryptoTop(cantidad:number){
    //<Coin> determina que va a devolver un Coin (la interfaz)
    return this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets', {
      params:{
        vs_currency:'eur', //Moneda
        order:'market_cap_desc', //Modo de ordenar
        per_page:cantidad, //Cantidad por página
        page:1, //num página
        sparkline:false //MiniGráfico
      }
    });
  }

  //OBTENER UNA LISTA DE TODAS LAS CRYPTOMONEDAS DIVIDIDO POR PÁGINAS
  obtenerListaCryptoPorPaginas(cantidad:number, pagina:number, grafico:boolean){
    return this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets', {
      params:{
        vs_currency:'eur', //Moneda
        order:'market_cap_desc', //Modo de ordenar
        per_page:cantidad, //Cantidad por página
        page:pagina, //num página
        sparkline:grafico //MiniGráfico
      }
    });
  }

  //OBTENER UNA LISTA DE TODAS LAS CRYPTOMONEDAS
  obtenerListaCryptoTodo(grafico:boolean){
    return this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets', {
      params:{
        vs_currency:'eur', //Moneda
        order:'market_cap_desc', //Modo de ordenar
        per_page:250, //Cantidad por página
        sparkline:grafico //MiniGráfico
      }
    });
  }

  //OBTENER DETALLES DE UNA CRYPTOMONEDA EN ESPECIFICO, POR LA ID
  obtenerDetallesCryptoById(CryptoId:any){
    return this.http.get<CoinDetail[]>(`https://api.coingecko.com/api/v3/coins/${CryptoId}`, {
      params:{
        localization:false
      }
    });
  }


}
