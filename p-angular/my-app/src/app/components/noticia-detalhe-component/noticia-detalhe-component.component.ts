import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Noticia {
  id: number;
  titulo: string;
  data: string;
  conteudo: string;
  likes: number;
}

@Component({
  selector: 'app-noticia-detalhe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './noticia-detalhe-component.component.html',
  styleUrl: './noticia-detalhe-component.component.css'
})
export class NoticiaDetalheComponent {
  comentario = '';
  jaLikado = false;
  
  noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Nova Galeria de Fotos Disponível!',
      data: '02/09/2025',
      conteudo: `Acabamos de lançar uma nova galeria com fotos incríveis enviadas por nossos usuários! Explore imagens de paisagens, retratos e momentos únicos capturados ao redor do mundo. Não deixe de conferir e enviar suas próprias fotos para participar das próximas seleções.`,
      likes: 15
    },
    {
      id: 2,
      titulo: 'Funcionalidade de Favoritos Lançada',
      data: '01/09/2025',
      conteudo: `Agora você pode marcar suas fotos favoritas e acessá-las facilmente em seu perfil. Basta clicar no ícone de estrela em cada imagem para adicionar à sua lista de favoritos. Experimente já e organize suas melhores inspirações!`,
      likes: 8
    },
    {
      id: 3,
      titulo: 'Concurso de Fotografia: Participe!',
      data: '28/08/2025',
      conteudo: `Estão abertas as inscrições para o nosso concurso mensal de fotografia! Envie suas melhores imagens até o dia 15/09 e concorra a prêmios exclusivos. O tema deste mês é "Luz e Sombra". Participe e mostre seu talento para toda a comunidade!`,
      likes: 23
    }
  ];

  noticia?: Noticia;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.noticia = this.noticias.find(n => n.id === id);
    });
  }

  getStatusLike(): string {
    return this.jaLikado ? 'Você curtiu esta notícia' : 'Curtir notícia';
  }

  onLike(): void {
    if (this.noticia && !this.jaLikado) {
      this.noticia.likes++;
      this.jaLikado = true;
      console.log('Notícia curtida!');
    }
  }

  onEnviarComentario(): void {
    if (this.comentario.trim()) {
      console.log('Comentário enviado:', this.comentario);
      this.comentario = '';
    }
  }
}