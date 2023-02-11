import { Component,EventEmitter, Output } from '@angular/core';
import { BusquedaService } from '../busqueda.service';

@Component({
  selector: 'app-busqueda-criteria',
  templateUrl: './busqueda-criteria.component.html',
  styleUrls: ['./busqueda-criteria.component.css']
})
export class BusquedaCriteriaComponent {

  nombre : string;
  // Evento que podemos escuchar fuera del componente
  @Output() criteriaSelected = new EventEmitter();

  onCriteriaSelect(criteria: number) {
    this.criteriaSelected.emit(criteria);
  }

  constructor(private busquedaService: BusquedaService){

  }

  datosPais(pais:string){

  }
}
