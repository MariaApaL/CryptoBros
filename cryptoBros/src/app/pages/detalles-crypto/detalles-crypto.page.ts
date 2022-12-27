import { Coin } from 'src/app/interfaces/coin';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinGeckoService } from '../../services/coin-gecko.service';
import { CoinDetail } from '../../interfaces/coin';

@Component({
  selector: 'app-detalles-crypto',
  templateUrl: './detalles-crypto.page.html',
  styleUrls: ['./detalles-crypto.page.scss'],
})
export class DetallesCryptoPage implements OnInit {

  public isLoading:boolean = true; //Variable que determina si está cargando, para mostrar el Spinner
  public crypto!:CoinDetail;  //cryptomoneda en cuestión
  public cryptoId: any; //Variable para guardar la ID de la url

  //Propiedades de la criptomoneda
  public foto:string | undefined;

  
  constructor(private route:ActivatedRoute, public coinGecko:CoinGeckoService) { }

  ngOnInit() {  

    /*
    * Aquí recibiremos el parámetro introducido en la URL y lo almacenaremos en una variable.
    */
    this.route.paramMap.subscribe(params => {
      this.cryptoId = params.get('id');
      //Ya tenemo el id de la URL guardado en una variable (cryptoId)
    });
    
    this.obtenerCryptoById(this.cryptoId);
    
    setTimeout(()=>{
      console.log("crypto2", this.crypto);

    }, 500);
  }

  obtenerCryptoById(cryptoId:any){
    this.coinGecko.obtenerDetallesCryptoById(this.cryptoId)
    .subscribe(data =>{
      this.crypto = data;      
      this.isLoading = false;
      this.foto = this.crypto.image.large;
    });
  }

}
