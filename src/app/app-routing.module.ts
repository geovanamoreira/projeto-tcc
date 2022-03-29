import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MontagemComponent } from './montagem/montagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EncomendaComponent } from './encomenda/encomenda.component';
import { SobreComponent } from './sobre/sobre.component';
import { BoloComponent } from './montagem/montagem2/bolo/bolo.component';
import { CupcakeComponent } from './montagem/montagem2/cupcake/cupcake.component';
import { BrownieComponent } from './montagem/montagem2/brownie/brownie.component';
import { VeganoComponent } from './montagem/montagem2/vegano/vegano.component';
import { Montagem2Component } from './montagem/montagem2/montagem2.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'montagem', component: MontagemComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'encomenda', component: EncomendaComponent},
  {path:'sobre', component: SobreComponent},
  {path:'bolo', component: BoloComponent},
  {path:'cupcake', component: CupcakeComponent},
  {path:'brownie', component: BrownieComponent},
  {path:'vegano', component: VeganoComponent},
  {path:'montagem2', component: Montagem2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
