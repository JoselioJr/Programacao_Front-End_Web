import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  anoAtual = new Date().getFullYear();
  email = '';
  isSubscribed = false;

  getStatusNewsletter(): string {
    return this.isSubscribed ? 'Inscrito na newsletter' : 'Inscreva-se na newsletter';
  }

  onInscrever(): void {
    if (this.email) {
      this.isSubscribed = true;
      console.log('Email inscrito:', this.email);
    }
  }
}
