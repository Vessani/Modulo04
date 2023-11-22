// controle-livros.service.ts

import { Injectable } from '@angular/core';
import { Livro } from './livro'; 

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Livro[] = [
    new Livro(1, 1, 'A Ilha do Tesouro', 'O livro conta a história de Jim Hawkins, um jovem que se vê envolvido em uma emocionante busca por um tesouro escondido.', ['Robert Louis Stevenson']),
    new Livro(2, 2, 'As Minas de Salomão', 'A história segue o aventureiro Allan Quatermain em uma expedição ao coração da África em busca das lendárias Minas de Salomão.', ['H. Rider Haggard']),
    new Livro(3, 3, 'A Ilha Misteriosa', 'A história narra as aventuras de um grupo de náufragos em uma ilha misteriosa.', ['Jules Verne']),
  ];

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
