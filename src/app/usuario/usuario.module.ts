import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuarioService } from './usuario.service';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioDetalheComponent,
    UsuarioEditarComponent
  ],
  
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    NgbModule
  ],
  exports:[
    UsuarioComponent
  ],
  providers:[
    UsuarioService
  ]
})
export class UsuarioModule { }
