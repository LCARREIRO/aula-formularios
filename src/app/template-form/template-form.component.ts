import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { TemplateFormService } from './template-form.service';
import { Cep } from '../classes/cep';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { EstadosBr } from '../shared/models/estados-brasileiros';
import { Observable } from 'rxjs';
import { DropdownService } from '../shared/services/dropdown.service';

@Component({
  selector: 'app-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: '',
    email: ''
  }

  cep: Cep;

  estados: Observable<EstadosBr[]>

  constructor(private templateService: TemplateFormService,
              private cepService: ConsultaCepService,
              private dropdownService: DropdownService
              ) { }

  ngOnInit() {
    this.estados = this.dropdownService.getEstadosBr();
  }

  consultaCEP(cep, form) {    

    if(cep != "" && cep !== null){
      this.cepService.consultaCEPService(cep)
        .subscribe(dados => this.populaDadosForm(dados, form));                                 
    }    
  }

  populaDadosForm(dados, formulario) {
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     cep: dados.cep,
    //     rua: dados.logradouro,
    //     complemento: dados.complemento,
    //     numero: '',
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     uf: dados.uf
    //   }
    // });

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        uf: dados.uf
      }
    });
  }

  onSubmit(form) {
    this.templateService.onSubmitService(form);
  }

  verificarValidTouched(campo) {
    return campo
  }

  aplicaCssErro(campo) {
    return {
      'has-error' : this.verificarValidTouched(campo),
      'has-feedback' : this.verificarValidTouched(campo)
    }
  }
}

