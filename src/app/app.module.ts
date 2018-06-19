import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { roteamento } from './roteamento';
import { FilterItens } from './pipes/FilterItens.pipe';

import { FotoService } from './service/foto.service';

import { AppComponent } from './app.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { CardComponent } from './components/card/card.component';
import { FotoComponent } from './components/foto/foto.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CardComponent,
    FotoComponent,
    CadastroComponent,
    FilterItens
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    roteamento,
    FormsModule
  ],
  providers: [
    FotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
