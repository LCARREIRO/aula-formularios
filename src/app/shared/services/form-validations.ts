import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {

  static requiredMinChekBox(min = 1) {
    const validator = (formArray: FormArray) => {

      const totalCheckd = formArray.controls
        .map(v => v.value)
        .reduce((total, current) => current ? total + current : total, 0);
      return totalCheckd >= min ? null : { required: true };
    }
    return validator;
  }

  static cepValidator(control: FormControl) {
    const cep = control.value;

    if (cep && cep !== '') {
      const validaCep = /^[0-9]{8}$/;

      return validaCep.test(cep) ? null : { cepInvalido: true };
    }
    return null;
  }

  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        return new Error('É necessário preencher o campo.');
      }

      const field = (<FormGroup>formControl.root).get(otherField);
    }
    return validator;
  }
}