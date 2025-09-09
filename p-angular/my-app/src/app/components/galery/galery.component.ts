import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent {
  filtro = '';
  imagemSelecionada = '';
  
  imagens = [
    { id: 1015, titulo: 'Paisagem Montanhosa', categoria: 'paisagem' },
    { id: 1016, titulo: 'Retrato Urbano', categoria: 'retrato' },
    { id: 1018, titulo: 'Natureza Selvagem', categoria: 'natureza' },
    { id: 1020, titulo: 'Arquitetura Moderna', categoria: 'arquitetura' }
  ];

  getImagensVisiveis() {
    return this.imagens.filter(img => 
      img.titulo.toLowerCase().includes(this.filtro.toLowerCase()) ||
      img.categoria.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  onImagemClick(id: number): void {
    this.imagemSelecionada = `Imagem ${id} selecionada`;
    console.log('Imagem clicada:', id);
  }
}
