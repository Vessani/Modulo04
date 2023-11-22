import { Injectable } from '@angular/core';
import { Editora } from './editora'; 

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  private editoras: Editora[] = [
    new Editora(1, 'Martin Claret'),
    new Editora(2, 'Zahar'),
    new Editora(3, 'Nova Fronteira'),
  ];

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : 'Editora não encontrada';
  }
}
