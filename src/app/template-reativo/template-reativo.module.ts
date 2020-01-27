import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'


import { SharedModule } from '../shared/shared.module';
import { TemplateReativoComponent } from './template-reativo.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    TemplateReativoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,    
    SharedModule,
    NgbModule
  ],
  exports: [  
    TemplateReativoComponent
  ]
})
export class TemplateReativoModule { }
