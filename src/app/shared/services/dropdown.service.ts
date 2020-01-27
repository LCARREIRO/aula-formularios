import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadosBr } from '../models/estados-brasileiros';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBr() {
    return this.http.get<EstadosBr[]>('/assets/dados/estados-brasileiros.json');      
  }

  getCargos() {
    return [
      {nome:'Dev' , nivel:'Junior', desc:'Dev Jr'},
      {nome:'Dev' , nivel:'Pleno', desc:'Dev Pleno'},
      {nome:'Dev' , nivel:'Senior', desc:' Dev Senior'}
    ]
  }

  getTecnologias(){
    return [
      {nome: 'java', desc: 'Java'},
      {nome: 'javascript', desc: 'JavaScript'},
      {nome: 'php', desc: 'PHP'},
      {nome: 'ruby', desc: 'Ruby'},
    ]
  }
  getRadioButton(){

    return [
      {cod:'s', desc: 'Sim'},
      {cod:'n', desc: 'Não'},
    ]
  }
}
