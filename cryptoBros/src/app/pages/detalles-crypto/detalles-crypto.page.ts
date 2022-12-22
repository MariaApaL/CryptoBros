import { Coin } from 'src/app/interfaces/coin';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-crypto',
  templateUrl: './detalles-crypto.page.html',
  styleUrls: ['./detalles-crypto.page.scss'],
})
export class DetallesCryptoPage implements OnInit {

  public crypto: any;  //cryptomoneda en cuestión
  public cryptoId: any; //Variable para guardar la ID de la url
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    /*
    * Aquí recibiremos el parámetro introducido en la URL y lo almacenaremos en una variable.
    */
    this.route.paramMap.subscribe(params => {
      this.cryptoId = params.get('id'); 
      //Ya tenemo el id de la URL guardado en una variable (cryptoId)
    })
  }

}
