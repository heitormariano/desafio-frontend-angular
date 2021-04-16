import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaDetalhesComponent } from './pessoa-detalhes/pessoa-detalhes.component';
import { CriarPessoaComponent } from './criar-pessoa/criar-pessoa.component';
import { PessoaListarComponent } from './pessoa-listar/pessoa-listar.component';
import { AtualizarPessoaComponent } from './atualizar-pessoa/atualizar-pessoa.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoa', pathMatch: 'full' },
  { path: 'pessoas', component: PessoaListarComponent },
  { path: 'adicionar', component: CriarPessoaComponent },
  { path: 'atualizar/:id', component: AtualizarPessoaComponent },
  { path: 'detalhes/:id', component: PessoaDetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
