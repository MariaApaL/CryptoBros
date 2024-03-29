import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes} from '@angular/router';

//RUTAS PRINCIPALES DE LA APLIACION

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/inicio', //REDIRECCIONA A 'HOME/INICIO'
    pathMatch: 'full'
  },
  {
    path: 'home', //URL PAGINA PRINCIPAL
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'cryptos',
    loadChildren: () => import('./pages/home/inicio/cryptos/cryptos.module').then(m => m.CryptosPageModule)
  },
  {
    //URL con parámetro
    path: 'detalles-crypto/:id', //id como parámetro
    loadChildren: () => import('./pages/detalles-crypto/detalles-crypto.module').then( m => m.DetallesCryptoPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
