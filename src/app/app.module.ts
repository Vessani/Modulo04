// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importe o FormsModule aqui
import { RouterModule } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent,
    LivroDadosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule,
    AppRoutingModule,
  ],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
