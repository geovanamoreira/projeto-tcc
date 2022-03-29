import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EncomendaComponent } from './encomenda/encomenda.component';
import { MontagemComponent } from './montagem/montagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HeaderComponent } from './header/header.component';
import { SobreComponent } from './sobre/sobre.component';
import { BoloComponent } from './montagem/montagem2/bolo/bolo.component';
import { CupcakeComponent } from './montagem/montagem2/cupcake/cupcake.component';
import { BrownieComponent } from './montagem/montagem2/brownie/brownie.component';
import { VeganoComponent } from './montagem/montagem2/vegano/vegano.component';
import { Montagem2Component } from './montagem/montagem2/montagem2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncomendaComponent,
    MontagemComponent,
    CadastroComponent,
    HeaderComponent,
    SobreComponent,
    BoloComponent,
    CupcakeComponent,
    BrownieComponent,
    VeganoComponent,
    Montagem2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
