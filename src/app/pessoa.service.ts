import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private urlBase = 'http://localhost:8081/springboot-crud-softplan/api/pessoas';

  constructor(private http: HttpClient) { }

  obterPessoa(id: number): Observable<any> {
    return this.http.get(`${this.urlBase}/${id}`);
  }

  criarPessoa(pessoa: Object): Observable<Object> {
    return this.http.post(`${this.urlBase}`, pessoa);
  }

  atualizarPessoa(id: number, valor: any): Observable<Object> {
    return this.http.put(`${this.urlBase}/${id}`, valor);
  }

  excluirPessoa(id: number): Observable<any> {
    return this.http.delete(`${this.urlBase}/${id}`, { responseType: 'text' });
  }

  getListaPessoas(): Observable<any> {
    return this.http.get(`${this.urlBase}`);
  }
}
