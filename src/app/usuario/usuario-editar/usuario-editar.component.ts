import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/classes/usuario';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  usuario: Usuario;
  inscricao: Subscription;
  id: number;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.usuario = this.usuarioService.obterUsuarioDetalhe(this.id);
        
        if(this.usuario === null){
          this.router.navigate(['/usuario']);
        }  
      });
  }
}
