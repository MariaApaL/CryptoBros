import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Es un componente que ya trae ionic y sirve para navegar entre paginas
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   
  constructor(private navCtrl: NavController,private router: Router) { }
  passwordIcon = 'eye-off';
  passwordType = 'password';
 

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  goToSignup(){
    this.router.navigate(["/signup"]);
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
