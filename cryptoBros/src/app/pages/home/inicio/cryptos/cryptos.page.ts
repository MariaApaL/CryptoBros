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

  constructor(private coinGecko:CoinGeckoService) { }

<<<<<<< HEAD
  async ngOnInit() {   
    this.obtenerTodas(); 
=======
  ngOnInit() {    
    
    

>>>>>>> rubik
  }

  //Función para buscar por palabra
  buscarCrypto(event:any){
    this.busqueda = event.detail.value; //Almacena la búsqueda para aplicar el filtro 'pipe'
  }

  //Función para ordenar
  OrdenarCrypto(event:any){
    this.orden = event.detail.value;
    console.log(this.orden);
  }

  //Función que se ejecuta cada vez que llegamos al final del scroll
  obtenerTodas(){
    this.coinGecko.obtenerListaCryptoTodo(false)   //Metodo del servicio CoinGecko
    .subscribe(coins=>{                   //El nombre 'coins' puede ser cualquiera
      this.allCoins.push(...coins);       //Guardamos el array de monedas obetenido en el público              
    });
  }


}
