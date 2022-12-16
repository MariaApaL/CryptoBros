import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//RUTAS PRINCIPALES DE LA APLIACION

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/inicio', //REDIRECCIONA A 'HOME/INICIO'
    pathMatch: 'full'
  },
  {
    path: 'home', //URL PAGINA PRINCIPAL
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/home/login/login.module').then( m => m.LoginPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
