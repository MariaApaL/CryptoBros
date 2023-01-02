import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Es un componente que ya trae ionic y sirve para navegar entre paginas
import { NavController } from '@ionic/angular';
import { LoginPageForm } from './login.page.form';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController,private router: Router) { }
  passwordIcon = 'eye-off';
  passwordType = 'password';

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  goBack() {
    this.navCtrl.back();
  }

  goToSignup(){
    this.router.navigate(["/signup"]);
  }


  //Método para el icono del ojo en la contraseña
  passwordOn() {
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  


}
