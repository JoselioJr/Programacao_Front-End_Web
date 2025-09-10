import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-data',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-data.component.html',
  styleUrl: './client-data.component.css'
})
export class ClientDataComponent {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      console.log(this.clientForm.value);
    }
  }

  clearForm() {
    this.clientForm.reset();
  }
}
