import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  consultaCEPService(cep: string) {
    if (cep != "" ) {
      return this.http.get(`//viacep.com.br/ws/${cep}/json/`);     
    }    
  }
}
