import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientDataComponent } from './components/client-data/client-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cadastro';
}
