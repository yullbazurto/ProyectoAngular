import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  titulo:string="Contactanos"

  medios:any[]=[
    {"texto":"En Twitte"},
    {"texto":"En Facebook"},
    {"texto":"Por correo electronico"}
  ]
}
