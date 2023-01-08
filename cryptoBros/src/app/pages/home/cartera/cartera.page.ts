import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.page.html',
  styleUrls: ['./cartera.page.scss'],
})
export class CarteraPage implements OnInit {

  constructor(private navCtrl: NavController,) {}

  ngOnInit() {}
  navigateToLogin() {
    this.navCtrl.navigateForward('/login');
  }

  // navigateToSignup() {
  //   this.navCtrl.navigateForward('../signup');
  // }
}
