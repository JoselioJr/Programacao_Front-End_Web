import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  nomeProduto = '';
  produtoSelecionado = '';
  
  produtos = [
    { id: 1, nome: 'Câmera DSLR', preco: 2500, categoria: 'equipamento' },
    { id: 2, nome: 'Lente 50mm', preco: 800, categoria: 'acessorio' },
    { id: 3, nome: 'Tripé Profissional', preco: 300, categoria: 'acessorio' },
    { id: 4, nome: 'Flash Externo', preco: 450, categoria: 'equipamento' }
  ];

  getProdutosFiltrados() {
    return this.produtos.filter(p => 
      p.nome.toLowerCase().includes(this.nomeProduto.toLowerCase())
    );
  }

  onProdutoClick(produto: any): void {
    this.produtoSelecionado = `${produto.nome} - R$ ${produto.preco}`;
    console.log('Produto selecionado:', produto);
  }

  onLimparFiltro(): void {
    this.nomeProduto = '';
    this.produtoSelecionado = '';
  }
}
