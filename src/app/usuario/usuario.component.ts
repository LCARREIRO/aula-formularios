import { Component, OnInit, Output, TemplateRef } from '@angular/core';
import 'rxjs/add/operator/map';
import { Usuario } from '../classes/usuario';
import { UsuarioService } from './usuario.service';
import { NgbModal, NgbPagination } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  page: number = 1;
  pageSize: number = 5;
  usuarioExcluido: string = "";

  closeResult: string;
  private usuarios: Usuario[] = [];
  private usuarioDetalhe: Usuario;


  constructor(
    private usuarioService: UsuarioService,
    private modalService: NgbModal,
  ) {
    this.usuarios = this.usuarioService.listarTodos();
  }

  ngOnInit() {
  }
  
  delete(id, nome, sobrenome, exclusao){

     if(confirm(`Confirma exclusão do usuario ${ id + 1 } - ${ nome } ${ sobrenome } ?`)){
       this.usuarioService.delete(id);
       this.usuarios = this.usuarioService.listarTodos();        
       this.usuarioExcluido = `Usuário " ${ id } - ${ nome } ${ sobrenome }" excluído com sucesso!`;
       this.modalService.open(exclusao);      
     }        
  }

  open(detalhe, id) {
    this.usuarioDetalhe = this.usuarioService.obterUsuarioDetalhe(id);
    this.modalService.open(detalhe, { size: 'lg' });
  }

}


