import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  titulo = 'Galeria de fotos';
  pesquisa = '';
  isMenuOpen = false;

  getSaudacao(): string {
    const hora = new Date().getHours();
    return hora < 12 ? 'Bom dia!' : hora < 18 ? 'Boa tarde!' : 'Boa noite!';
  }

  onPesquisar(): void {
    console.log('Pesquisando por:', this.pesquisa);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
