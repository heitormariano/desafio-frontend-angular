import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css'],
})
export class CriarPessoaComponent implements OnInit {
  pessoa: Pessoa = new Pessoa();
  submetido: boolean = false;
  formPessoa: FormGroup;

  constructor(
    private pessoaService: PessoaService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.criarFormulario(this.pessoa);
  }

  // novaPessoa(): void {
  //   this.submetido = false;
  //   this.pessoa = new Pessoa();
  // }

  salvar() {
    this.pessoaService.criarPessoa(this.pessoa).subscribe(
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
    this.submetido = true;
    this.preencherDadosPessoaModelo();
    this.salvar();
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
      nacionalidade: [pessoa.nacionalidade]
    })
  }

  preencherDadosPessoaModelo(){
    this.pessoa.nome = this.formPessoa.value.nome;
    this.pessoa.cpf = this.formPessoa.value.cpf;
    this.pessoa.email = this.formPessoa.value.email;
    this.pessoa.naturalidade = this.formPessoa.value.naturalidade;
    this.pessoa.nacionalidade = this.formPessoa.value.nacionalidade;
  }
}
