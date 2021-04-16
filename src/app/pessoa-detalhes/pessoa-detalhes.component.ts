import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { PessoaListarComponent } from '../pessoa-listar/pessoa-listar.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-detalhes',
  templateUrl: './pessoa-detalhes.component.html',
  styleUrls: ['./pessoa-detalhes.component.css'],
})
export class PessoaDetalhesComponent implements OnInit {
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

  listar() {
    this.router.navigate(['pessoas']);
  }
}
