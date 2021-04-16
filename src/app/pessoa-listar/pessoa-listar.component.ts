import { Component, OnInit } from '@angular/core';
import { PessoaDetalhesComponent } from '../pessoa-detalhes/pessoa-detalhes.component';
import { Observable } from 'rxjs';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-listar',
  templateUrl: './pessoa-listar.component.html',
  styleUrls: ['./pessoa-listar.component.css'],
})
export class PessoaListarComponent implements OnInit {
  pessoas: Observable<Pessoa[]>;

  constructor(private pessoaService: PessoaService,
    private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.pessoas = this.pessoaService.getListaPessoas();
  }

  excluirPessoa(id: number) {
    this.pessoaService.excluirPessoa(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  pessoaDetalhes(id: number){
    this.router.navigate(['detalhes', id]);
  }

  atualizarPessoa(id: number){
    this.router.navigate(['atualizar', id]);
  }
}
