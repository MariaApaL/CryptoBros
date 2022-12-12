import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTabComponent } from './menu-tab.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes=[

  {

    path: 'paginas',
    component: MenuTabComponent,
    
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
