import { Component } from '@angular/core';
import {NgForm} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  constructor(private router: Router){}
  submit(f: NgForm){
    if(f.value.email!='' && f.value.nombre!='' && f.value.mensaje!='' && f.value.telefono!=''){
      alert("Mensaje Enviado con éxito");
      f.resetForm();
      return
    }
    alert("Ingrese sus Datos")
  }
}
