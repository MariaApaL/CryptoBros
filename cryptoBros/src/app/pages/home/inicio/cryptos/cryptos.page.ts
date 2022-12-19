import { Component, OnInit, ViewChild } from '@angular/core';
import { Coin } from 'src/app/interfaces/coin';
import { CoinGeckoService } from '../../../../services/coin-gecko.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.page.html',
  styleUrls: ['./cryptos.page.scss'],
})
export class CryptosPage implements OnInit {

  //Dlecara el Array que almacenara las coins
  public allCoins:Coin[] = [];

  //Decalra contador para mostrar por páginas
  public page:number = 1;

  // Declara las propiedades de la clase
  public busqueda: string = '';
  public orden: string = '';
  public cryptos: any[] = [];

  //Obtenemos el infinite scroll del VIEW
  @ViewChild('infiniteScroll') infinito!: IonInfiniteScroll;

  constructor(private coinGecko:CoinGeckoService) { }

  async ngOnInit() {   
    this.obtenerTodas(); 
  }


  //Función que se ejecuta cada vez que llegamos al final del scroll
  obtenerTodas(){
    this.coinGecko.obtenerListaCryptoTodo(50, this.page, false)   //Metodo del servicio CoinGecko
    .subscribe(coins=>{                   //El nombre 'coins' puede ser cualquiera
      this.allCoins.push(...coins);       //Guardamos el array de monedas obetenido en el público
      this.page++;                        //Incrementamos la páginas   
      this.infinito.complete();                      
    });
  }


}
