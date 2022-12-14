import { Component, OnInit } from '@angular/core';
import { BinanceService } from '../../services/binance.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  

  public datos:any;

  constructor(public binance:BinanceService) { }

  ngOnInit() {
  }

  obtenerDatos(){
    this.binance.obtenerDatos()
  }



}
