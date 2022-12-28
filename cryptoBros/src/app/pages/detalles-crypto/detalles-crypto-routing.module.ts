import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesCryptoPage } from './detalles-crypto.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesCryptoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesCryptoPageRoutingModule {}
