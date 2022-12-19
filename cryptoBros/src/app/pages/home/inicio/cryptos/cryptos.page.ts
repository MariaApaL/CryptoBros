import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.page.html',
  styleUrls: ['./cryptos.page.scss'],
})
export class CryptosPage implements OnInit {

  // Declara las propiedades de la clase
  busqueda: string = '';
  orden: string = '';
  cryptos: any[] = [];

  constructor() { }

  ngOnInit() {    
  }

}
