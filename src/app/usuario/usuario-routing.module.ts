import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';

const routes: Routes = [
  {
    path: 'usuario', component: UsuarioComponent    
  },
  {
    path: 'usuario/:id', component: UsuarioDetalheComponent
  },
  {
    path: 'usuario/editar/:id', component: UsuarioEditarComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
