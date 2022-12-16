import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  enviar() {
    // const email = this.email;
    // const password = this.password;
    console.log("enviando datos");
  
  }
}
