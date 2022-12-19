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

  constructor() { }

  ngOnInit() {}

}
