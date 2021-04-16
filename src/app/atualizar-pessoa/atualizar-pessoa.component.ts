import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-atualizar-pessoa',
  templateUrl: './atualizar-pessoa.component.html',
  styleUrls: ['./atualizar-pessoa.component.css'],
})
export class AtualizarPessoaComponent implements OnInit {
  id: number;
  pessoa: Pessoa;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    this.pessoa = new Pessoa();
    this.id = this.route.snapshot.params['id'];

    this.pessoaService.obterPessoa(this.id).subscribe(
      (data) => {
        console.log(data);
        this.pessoa = data;
      },
      (error) => console.log(error)
    );
  }

  atualizarPessoa() {
    this.pessoaService.atualizarPessoa(this.id, this.pessoa).subscribe(
      (data) => {
        console.log(data);
        this.pessoa = new Pessoa();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.atualizarPessoa();
  }

  gotoList() {
    this.router.navigate(['/pessoas']);
  }
}
