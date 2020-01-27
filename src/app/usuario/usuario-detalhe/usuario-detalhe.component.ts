import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from 'src/app/classes/usuario';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit {

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

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
