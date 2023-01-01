import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  constructor(private navCtrl: NavController,private router: Router) { }
  passwordIcon = 'eye-off';
  passwordType = 'password';
 

  ngOnInit() {
  }

  navigateToPage() {
    this.navCtrl.navigateForward('/home');
  }

  goToSignup(){
    this.router.navigate(["/login"]);
  }
  enviar() {
    // const email = this.email;
    // const password = this.password;
    console.log("enviando datos");
   }

  //Método para el icono del ojo en la contraseña
  passwordOn() {
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

}
