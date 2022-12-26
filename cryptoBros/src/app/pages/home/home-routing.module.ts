import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteraPageModule } from './cartera/cartera.module';
import { InicioPageModule } from './inicio/inicio.module';
import { NoticiasPageModule } from './noticias/noticias.module';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'inicio', //Esto hace que cada vez que vayamos a HOME, no muestre INICIO por defecto
    pathMatch:'full'
  },
  {
    path: '',
    component: HomePage,
    children: [ //Definimo sla rutas hijas, donde irá las trés páginas principales del Inicio (Tabs)
    {
      //
      path:'noticias',
      loadChildren:()=> import('./noticias/noticias.module').then(m => NoticiasPageModule)
    },
    {
      path:'inicio',
      loadChildren:()=> import('./inicio/inicio.module').then(m => InicioPageModule)
    },
    {
      path:'cartera',
      loadChildren:()=> import('./cartera/cartera.module').then(m => CarteraPageModule)
    },
    {
      path: 'signup',
      loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    }    
  ]
},

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
