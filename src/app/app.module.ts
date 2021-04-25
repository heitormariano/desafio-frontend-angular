import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CriarPessoaComponent } from './criar-pessoa/criar-pessoa.component';
import { PessoaDetalhesComponent } from './pessoa-detalhes/pessoa-detalhes.component';
import { PessoaListarComponent } from './pessoa-listar/pessoa-listar.component';
import { AtualizarPessoaComponent } from './atualizar-pessoa/atualizar-pessoa.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CriarPessoaComponent,
    PessoaDetalhesComponent,
    PessoaListarComponent,
    AtualizarPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
