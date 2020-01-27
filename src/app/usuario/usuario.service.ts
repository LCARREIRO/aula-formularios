import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios: Usuario[] = [];

  constructor(private http: HttpClient) { 
    this.getUsuarios();
  }

  public obterUsuarioDetalhe(id: number): Usuario {

    let usuarios = JSON.parse(localStorage["Usuarios"]);

    return usuarios.filter(u => u.index == id);
  }
  
  public listarTodos(): Usuario[] {
    const usuarios = localStorage["Usuarios"];
    return usuarios ? JSON.parse(usuarios) : [];
  }

  public obterDetalhes(index: number): Usuario {
    console.log(index);
    const usuarios: Usuario[] = this.listarTodos();
    return usuarios.find(usuario => usuario.index === index);
  } 

  public  salvarLocalStorage(usuarios) {
    localStorage["Usuarios"] = JSON.stringify(usuarios);
  }

  public getUsuarios() {
    this.http.get("https://next.json-generator.com/api/json/get/VJ6-fYXwI")
      .subscribe((res: any[]) => {
        this.usuarios = res;

        if (localStorage["Usuarios"] == undefined)
            this.salvarLocalStorage(res);
      });
  }

  public delete(index){

    //Seleciona todos os usuários, menos o usuário com index = ao informado no parametro.
    const usuarios = this.listarTodos().filter(usuario => usuario.index != index);
    
    //Remove todos o usuários.
    localStorage.removeItem("Usuarios");

    //Insere os usuários novamente.
    localStorage["Usuarios"] = JSON.stringify(usuarios);
  }
}

