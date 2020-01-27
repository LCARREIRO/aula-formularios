import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormModule } from './template-form/template-form.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TemplateReativoModule } from './template-reativo/template-reativo.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateFormModule, 
    TemplateReativoModule, 
    UsuarioModule,

  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
