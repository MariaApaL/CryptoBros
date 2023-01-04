import { CoinChart } from './../../interfaces/coin';
import { Coin } from 'src/app/interfaces/coin';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinGeckoService } from '../../services/coin-gecko.service';
import { CoinDetail } from '../../interfaces/coin';


//Libreria de las gráficas 
import { Chart, ChartDatasetProperties, ChartDataset} from 'chart.js';

@Component({
  selector: 'app-detalles-crypto',
  templateUrl: './detalles-crypto.page.html',
  styleUrls: ['./detalles-crypto.page.scss'],
})
export class DetallesCryptoPage implements OnInit {

  public isLoading:boolean = true; //Variable que determina si está cargando, para mostrar el Spinner
  public crypto!:CoinDetail;  //cryptomoneda en cuestión
  public cryptoId: any; //Variable para guardar la ID de la url

  //Variables de la grafica
  public chartData24h:CoinChart;
  public chartData7d:CoinChart;
  public myChart:Chart;
  
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
      this.generarChart();

      // Insertamos en el HTML algunos valores, a que contienen codigo html
      document.getElementById('descripcion').innerHTML= this.crypto.description.en;

    }, 500);

    this.obtenerChartCrypto();

    
  }

  obtenerCryptoById(cryptoId:any){
    this.coinGecko.obtenerDetallesCryptoById(this.cryptoId)
    .subscribe(data =>{
      this.crypto = data;      
      this.isLoading = false;
    });
  }

  generarChart(){

    //Transformamos los datos recibidos, para poder pasarselos correctamente al Chart
    const data:number[] = this.chartData24h.prices.map(([, y]) => y);
    //Obtenemos el canvas, donde colocaremos el Chart
    const ctx = <HTMLCanvasElement>document.getElementById('myChart');
    //Creamos el Chart
    this.myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: this.obtenerArrayHoras(), //Valores inferiores (hora, dias...)
          datasets: [{
              label: 'Precio 24H',
              data: data, //Datos recibidos
              backgroundColor: [
                  'rgba(235, 118, 10, 1)'
              ],
              borderColor: [
                  'rgba(235, 118, 10, 1)'
              ],
              borderWidth: 2,
              pointRadius: 0
          }]
      },
      options:{
        
      }
  });

    document.getElementById('boton24h').addEventListener('click', () =>{
      //Operación para poder transformar los valores a los adecuados.
      const data:number[] = this.chartData24h.prices.map(([, y]) => y);

      this.myChart.data.labels = this.obtenerArrayHoras();
      this.myChart.data.datasets[0].label = 'Precio 24H'
      this.myChart.data.datasets[0].data = data;
      
      this.myChart.update();
    })

    document.getElementById('boton7d').addEventListener('click', () =>{

      //Operación para poder transformar los valores a los adecuados.
      const data:number[] = this.chartData7d.prices.map(([, y]) => y);

      this.myChart.data.labels = this.obtenerArrayDias();
      this.myChart.data.datasets[0].label = 'Precio 7 Días'
      this.myChart.data.datasets[0].data = data;
      
      this.myChart.update();
    })
  }



  //METODO PARA GENERAR UN ARRAY DE HORAS, PARA EL CHART
  obtenerArrayHoras() : number[]{
    //Creamos un objeto Date
    const currentDate = new Date();
    //Almacenamos la hora actual
    const currentHour = currentDate.getHours();
    //Creamos el array que devolveremos, con la hora actual ya introducida
    const hoursArray = [currentHour];

    //Introducimos la horas restantes, 24 horas.
    for (let i = currentHour + 1; i != currentHour; i++) {

      if(i == 24){ i=0; }

      hoursArray.push(i);
    }

    //Devolvemos el array
    return hoursArray;
  }

  //METODO PARA GENERAR UN ARRAY DE LOS DIAS, PARA EL CHART
  obtenerArrayDias():string[]{
    const diasDeLaSemana = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
    const date = new Date();
    const hoy = date.getDay();
    const arrayDias:string[] = []

    for(let i = 0; i<7; i++){
      arrayDias.push(diasDeLaSemana[(hoy + i) % 7])
    }

    return arrayDias;
  }

  //METODO APRA OBTNER EL CAHRT DE UNA CRYPTO
  obtenerChartCrypto(){
    this.coinGecko.obtenerChartCryptoById(this.cryptoId, 1, 'hourly')
    .subscribe(chart =>{
      this.chartData24h = chart;
      console.log('24H',chart)
    })

    this.coinGecko.obtenerChartCryptoById(this.cryptoId, 7, 'daily')
    .subscribe(chart =>{
      this.chartData7d = chart;
      console.log('7DIAS', chart)
    })
  }
}
