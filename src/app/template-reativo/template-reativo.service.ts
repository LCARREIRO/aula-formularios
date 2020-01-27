import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemplateReativoService {

  constructor(private http: HttpClient) { }

  onSubmit(formulario) {
    return this.http.post('https://httpbin.org/post', JSON.stringify(formulario))
      .map(res => res)
      .subscribe(dados => {
        dados;
      },
        (error: any) => alert('erro')
      );
  }
}
