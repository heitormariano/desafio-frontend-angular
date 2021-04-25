import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-atualizar-pessoa',
  templateUrl: './atualizar-pessoa.component.html',
  styleUrls: ['./atualizar-pessoa.component.css'],
})
export class AtualizarPessoaComponent implements OnInit {
  id: number;
  pessoa: Pessoa;
  formPessoa: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pessoaService: PessoaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.pessoa = new Pessoa();
    this.id = this.route.snapshot.params['id'];

    this.pessoaService.obterPessoa(this.id).subscribe(
      (data) => {
        console.log(data);
        this.pessoa = data;
        this.criarFormulario(this.pessoa);
      },
      (error) => console.log(error)
    );
  }

  atualizarPessoa() {
    this.pessoaService.atualizarPessoa(this.id, this.pessoa).subscribe(
      (data) => {
        console.log(data);
        this.pessoa = new Pessoa();
        this.criarFormulario(this.pessoa);
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.preencherDadosPessoaModelo();
    this.atualizarPessoa();
  }

  gotoList() {
    this.router.navigate(['/pessoas']);
  }

  criarFormulario(pessoa: Pessoa) {
    this.formPessoa = this.formBuilder.group({
      nome: [pessoa.nome],
      cpf: [pessoa.cpf],
      email: [pessoa.email],
      naturalidade: [pessoa.naturalidade],
      nacionalidade: [pessoa.nacionalidade],
    });
  }

  preencherDadosPessoaModelo() {
    this.pessoa.nome = this.formPessoa.value.nome;
    this.pessoa.cpf = this.formPessoa.value.cpf;
    this.pessoa.email = this.formPessoa.value.email;
    this.pessoa.naturalidade = this.formPessoa.value.naturalidade;
    this.pessoa.nacionalidade = this.formPessoa.value.nacionalidade;
  }
}
