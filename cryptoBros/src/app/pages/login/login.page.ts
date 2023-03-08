import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Es un componente que ya trae ionic y sirve para navegar entre paginas
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public form: FormGroup;

  login:boolean = true;

  
  constructor(private formBuilder: FormBuilder, 
    private navCtrl: NavController,
    private router: Router,
    private auth:AuthService) { 

    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('',Validators.required),
      pwd: new FormControl('', Validators.required),
      rpwd: new FormControl('', Validators.required)
    })
  }
  
  passwordIcon = 'eye-off';
  passwordType = 'password';

  ngOnInit() {
    // this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  // return this.formBuilder.group({
  //   name:['',[Validators.required,Validators.maxLength(10)]],
  //   email:['',[Validators.required, Validators.email]],
  //   password:['', [Validators.required, Validators.minLength(8)]]
  //   // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
  // });

  // Método para el icono del ojo en la contraseña
  passwordOn() {
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  segmentChanged(event:any){
    const chose = event.detail.value;

    this.login = chose === 'login';
  }

  checkPassword(){
    const pwd = this.form.controls.pwd.value;
    const confirmPwd = this.form.controls.rpwd.value;

    return pwd === confirmPwd ? true : false;
  }
  
  onLogin(){
    const username = this.form.controls.username.value;
    const pwd = this.form.controls.pwd.value;

    this.auth.onLoginUser(username, pwd).subscribe({
      next: res => {
        console.log(res);
        localStorage.setItem('token', res.token); //Guardamos el token el el LocalStorage
        this.router.navigate(['/profile'], {replaceUrl:true}); //Replace url borra el historial para evitar errores de navegacion
      },
      error: err => {console.error(err);
      }
    })
  }

  onRegister(){

    if(this.form.valid){
      const username = this.form.controls.username.value;
      const pwd = this.form.controls.pwd.value;
      const email = this.form.controls.email.value;
      const age = this.form.controls.age.value;
  
      this.auth.onRegister(username, pwd, email, age).subscribe({
        next: res => {
          console.log(res);
          this.onLogin();
        },
        error: err => {console.error(err);}
      })

    }else{
      console.error('Faltan valores');
      
    }
    
  }


}
