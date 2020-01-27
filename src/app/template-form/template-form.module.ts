import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TemplateFormComponent } from './template-form.component';
import { TemplateFormService } from './template-form.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TemplateFormComponent,
      
  ],
  imports: [
    CommonModule,    
    FormsModule,
    HttpClientModule,
    SharedModule

  ],
  providers: [
    TemplateFormService
  ]
})
export class TemplateFormModule { }