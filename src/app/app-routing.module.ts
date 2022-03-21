import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MontagemComponent } from './montagem/montagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EncomendaComponent } from './encomenda/encomenda.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'montagem', component: MontagemComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'encomenda', component: EncomendaComponent},
  {path:'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
