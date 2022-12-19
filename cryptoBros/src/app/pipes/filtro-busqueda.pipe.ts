import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroBusqueda'
})
export class FiltroBusquedaPipe implements PipeTransform {

  transform(array: any[], texto:string = ''): any[] {

    if(texto === ''){
      return array;
    }

    if(!array){
      return array;
    }

    texto = texto.toLowerCase();  
    
    return array.filter(
      coin => coin.name.toLowerCase().includes(texto)
    );
  }

}
