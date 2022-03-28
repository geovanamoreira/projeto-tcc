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
import { BoloComponent } from './montagem/bolo/bolo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncomendaComponent,
    MontagemComponent,
    CadastroComponent,
    HeaderComponent,
    SobreComponent,
    BoloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
