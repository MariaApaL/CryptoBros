import { CoinDetail, CoinChart } from './../interfaces/coin';
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
  obtenerDetallesCryptoById(cryptoId:any){
    return this.http.get<CoinDetail>(`https://api.coingecko.com/api/v3/coins/${cryptoId}`, {
      params:{
        localization:false
      }
    });
  }

  //OBTENER CHART DE UNA CRYPTOMONEDA POR ID
  obtenerChartCryptoById(cryptoId:any, dias:number, interval:string){
    return this.http.get<CoinChart>(`https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=eur&days=1&interval=hour`,{
      params:{
        vs_currency: 'eur',
        days: dias,
        interval: interval //o 'hourly'
      }
    })
  }

}
