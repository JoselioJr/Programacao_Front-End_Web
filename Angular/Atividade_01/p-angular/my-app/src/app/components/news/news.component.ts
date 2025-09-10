import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  filtroCategoria = 'todas';
  noticiaDestaque = 1;
  
  noticias = [
    { id: 1, titulo: 'Nova Galeria de Fotos Disponível!', categoria: 'galeria', destaque: true },
    { id: 2, titulo: 'Funcionalidade de Favoritos Lançada', categoria: 'funcionalidade', destaque: false },
    { id: 3, titulo: 'Concurso de Fotografia: Participe!', categoria: 'concurso', destaque: true }
  ];

  getNoticiasVisiveis() {
    return this.filtroCategoria === 'todas' 
      ? this.noticias 
      : this.noticias.filter(n => n.categoria === this.filtroCategoria);
  }

  onCategoriaChange(): void {
    console.log('Categoria alterada para:', this.filtroCategoria);
  }
}