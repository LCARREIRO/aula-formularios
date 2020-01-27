import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TemplateReativoComponent } from './template-reativo/template-reativo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'home', component: HomeComponent
  }, 
  {
    path: 'form', component: TemplateFormComponent
  },  
  { 
    path: 'usuario', component: UsuarioComponent 
  },
  { 
    path: 'reativo', component: TemplateReativoComponent 
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home' 
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
