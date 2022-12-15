import { Component, OnInit } from '@angular/core';
import { Coin } from 'src/app/interfaces/coin';
import { CoinGeckoService } from 'src/app/services/coin-gecko.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  public topCoins: Coin[] = []; //Aquí almacenaremos el top 5 de las monedas
  
  constructor(private coinGecko:CoinGeckoService) { }

  async ngOnInit() {

    //OBTENEMOS EL TOP 5 DE LA API
    this.coinGecko.obtenerListaCryptoTop(5)   //Metodo del servicio CoinGecko
    .subscribe(coins=>{                       //El nombre 'coins' puede ser cualquiera
      this.topCoins = coins;                  //Guardamos el array de monedas obetenido en el público
    });
  }



}
