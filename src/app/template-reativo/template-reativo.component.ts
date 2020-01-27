import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { TemplateReativoService } from './template-reativo.service';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadosBr } from '../shared/models/estados-brasileiros';
import { FormValidations } from '../shared/services/form-validations';

@Component({
  selector: 'app-template-reativo',
  templateUrl: './template-reativo.component.html',
  styleUrls: ['./template-reativo.component.css']
})
export class TemplateReativoComponent implements OnInit {

  // estados: EstadosBr[];

  newsletterOp: any[];
  tecnologias: any[];
  cargos: any[];
  estados: Observable<EstadosBr[]>;
  formulario: FormGroup
  erro: string[] = [];
  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private service: TemplateReativoService,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit() {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // })    

    // this.dropdownService.getEstadosBr()
    //     .subscribe(res => {this.estados = res; console.log(this.estados)});

    this.newsletterOp = this.dropdownService.getRadioButton();
    this.cargos = this.dropdownService.getCargos();
    this.estados = this.dropdownService.getEstadosBr();
    this.tecnologias = this.dropdownService.getTecnologias();

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      confirmarEmail: [null, Validators.required, Validators.email],

      endereco: this.formBuilder.group({
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        uf: [null, Validators.required],
        numero: [null],
        complemento: [null]
      }),
      cargo: [null],
      tecnologia: [null],
      newsletter: ['s'],
      termos: [null, Validators.requiredTrue],
      frameworks: this.buildFrameworks()

    })
  }
  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false));

    return this.formBuilder.array(values, FormValidations.requiredMinChekBox(1));
  }

  onSubmit() {

    let valueSubmit = Object.assign({}, this.formulario.value)

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v, i) => v ? this.frameworks[i] : null)
        .filter(v => v !== null)
    });

    console.log(valueSubmit);

    if (this.formulario.valid) {
      this.service.onSubmit(valueSubmit);
    }
    else {
      this.verificaValidacoesForm(this.formulario);
      //this.modalService.open(detalhe, { size: 'lg' });
    }
  }  

  verificaValidacoesForm(formGroup: FormGroup) {

    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);

      controle.markAsTouched();

      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetForm() {
    this.formulario.reset();
  }

  verificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo)
    }
  }

  ConsultaCep() {
    let cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== "") {
      this.cepService.consultaCEPService(cep)
        .subscribe(dados => this.populaDadosForm(dados),
          (error: any) => alert('CEP inválido')
        );
    }
  }

  populaDadosForm(dados) {
    // this.formulario.setValue({});

    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        uf: dados.uf
      }
    });
  }

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pleno' };
    this.formulario.get('cargo').setValue(cargo);
  }

  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologia() {
    this.formulario.get('tecnologia').setValue(['java', 'javascript', 'php']);
  }
}
