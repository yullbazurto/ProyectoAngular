import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  datos = [
    { nombre: 'Juan', correo: 'juan@gmail.com', telefono: '123456789' },
    { nombre: 'María', correo: 'maria@gmail.com', telefono: '987654321' },
    { nombre: 'Pedro', correo: 'pedro@gmail.com', telefono: '456789123' }
  ];
}
