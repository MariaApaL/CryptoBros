import { CoinGeckoService } from 'src/app/services/coin-gecko.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit, Input, Pipe } from '@angular/core';
import { Coin } from '../../interfaces/coin';

@Component({
  selector: 'app-card-crypto',
  templateUrl: './card-crypto.component.html',
  styleUrls: ['./card-crypto.component.scss'],
})
export class CardCryptoComponent implements OnInit {

  @Input() coins: Coin[] = []; //Importamos el Array de monedas para el componente
  @Input() textoFiltro?:string; //Texto para buscar (Opcional)
  @Input() ordenFiltro?:string; //Orden del Array (Opcional)
  @Input() detallesCrypto:any[] = []; //Orden del Array (Opcional)

  public favorite:boolean = false;

  
  constructor(public navCtrl: NavController, private coinGecko:CoinGeckoService) { } //Declaramos navCtrl para que podamos navegar entre páginas

  /*La variable navCtrl la creo para poder redirigir a la pagina de "detalles-crypto"*/

  ngOnInit() {}


  /*
  *Al realizar este metodo, obtiene la id de la crypto pulsada y se la pasa como parametro a la página
  *de detalles crypto. Esta la obtendrá y podrá crear la paágina a partir de este valor. Al presionarlo, 
  *tambien nos dirife a la página
  *
  *cryptoId es el parámetro que se le pasará. Puedes verlo en el html de este componente.
  */
  abrirDetallesCrypto(cryptoId: any){
    this.navCtrl.navigateForward(`/detalles-crypto/${cryptoId}`);
  }

  setFavorites(coin:Coin){

    coin.favorite = !coin.favorite;

    if(localStorage.getItem(coin.name)){
      localStorage.removeItem(coin.name);

    }else{
      localStorage.setItem(coin.name, coin.id);

    }    
  }
}
