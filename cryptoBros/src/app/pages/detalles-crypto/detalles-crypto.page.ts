import { Coin } from 'src/app/interfaces/coin';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinGeckoService } from '../../services/coin-gecko.service';
import { CoinDetail } from '../../interfaces/coin';

@Component({
  selector: 'app-detalles-crypto',
  templateUrl: './detalles-crypto.page.html',
  styleUrls: ['./detalles-crypto.page.scss'],
})
export class DetallesCryptoPage implements OnInit {

  public crypto: CoinDetail[] = [];  //cryptomoneda en cuestión
  public cryptoId: any; //Variable para guardar la ID de la url
  
  constructor(private route:ActivatedRoute, public coinGecko:CoinGeckoService) { }

  async ngOnInit() {

    /*
    * Aquí recibiremos el parámetro introducido en la URL y lo almacenaremos en una variable.
    */
    this.route.paramMap.subscribe(params => {
      this.cryptoId = params.get('id');
      //Ya tenemo el id de la URL guardado en una variable (cryptoId)
    });

    console.log(this.cryptoId);

    this.obtenerCryptoById(this.cryptoId);
    

    console.log("crypto2", this.crypto);
  }

  obtenerCryptoById(cryptoId:any){
    this.coinGecko.obtenerDetallesCryptoById(this.cryptoId)
    .subscribe(data =>{
      this.crypto = data;
      console.log("data", data);
      console.log("crypto", this.crypto);
    });
  }

}
