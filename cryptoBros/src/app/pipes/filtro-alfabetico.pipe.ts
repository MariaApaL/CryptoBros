import { Coin } from 'src/app/interfaces/coin';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroAlfabetico'
})
export class FiltroAlfabeticoPipe implements PipeTransform {

  //Ordenar por...

  transform(array: Coin[], txt?:string): any {

    //Si el orden es nulo o no existe, muestralo todo por defecto
    if(txt ==='' || txt===null || !txt){return array;}

    //Si el orden es 'nombreAsc' ordena el array de forma Ascendente por Nombre
    if(txt === 'nombreAsc') {return array.sort((a, b) => a.name.localeCompare(b.name));}

    //Si el orden es 'nombreDes' ordena el array de forma Descendente por Nombre
    if(txt === 'nombreDes') {return array.sort((a, b) => b.name.localeCompare(a.name));}
    
    //Si el orden es 'precioAsc' ordena el array de forma Descentente por Precio
    if(txt === 'precioDes') {return array.sort((a, b) => b.current_price - a.current_price);}

    //Si el orden es 'precioDes' ordena el array de forma Ascendente por Precio
    if(txt === 'precioAsc') {return array.sort((a, b) => a.current_price - b.current_price);}

    //Si el orden es 'porcentaje' ordena el array por porcentaje en 24%
    if(txt === 'porcentaje') {return array.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);}

    //Si el orden es 'relevancia':
    if(txt === 'relevancia') {return array.sort((a, b) => b.market_cap - a.market_cap);}
  }

}
