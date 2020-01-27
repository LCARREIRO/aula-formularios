import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateFormService {

  dados: any;

  constructor(private http: HttpClient) { }


  onSubmitService(form) {
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .map(res => res)
      .subscribe(dados => dados);
  }
}
