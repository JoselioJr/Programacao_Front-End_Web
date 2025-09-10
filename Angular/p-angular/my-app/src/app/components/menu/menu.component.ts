import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuAtivo = 'Galeria';
  contadorCliques = 0;

  menuItems = [
    { nome: 'Galeria', icone: '🖼️' },
    { nome: 'Favoritas', icone: '⭐' },
    { nome: 'Álbuns', icone: '📁' },
    { nome: 'Upload', icone: '⬆️' },
    { nome: 'Perfil', icone: '👤' }
  ];

  getStatusMenu(): string {
    return `Menu ativo: ${this.menuAtivo} (${this.contadorCliques} cliques)`;
  }

  onMenuClick(item: string): void {
    this.menuAtivo = item;
    this.contadorCliques++;
    console.log('Menu selecionado:', item);
  }
}
