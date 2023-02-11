import { Component, OnDestroy, OnInit } from '@angular/core';
import { BusquedaService } from './busqueda.service';
import { Busqueda } from './busqueda.model';
import { Subscription } from 'rxjs';

interface BusRes{
  pokemon: Busqueda[];
  criteria: string;
}

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnDestroy{

  criteria:string = '';
  loading: boolean = false;
  criteriaSelected: BusRes = {pokemon: [], criteria: ''};
  private subResponse: Subscription;
  private loadingResponse: Subscription = Subscription.EMPTY;

  constructor(public busquedaService: BusquedaService){
    this.subResponse = Subscription.EMPTY;
  }

  onCriteriaSelectedFromChild(tipo: number){

    this.busquedaService.search(String(tipo));
    this.criteria = 'xd'

    this.loadingResponse = this.busquedaService.getLoading().subscribe(r=>{
      this.loading=r;
    })
    this.subResponse = this.busquedaService.getBusquedaObservable().subscribe((r: Busqueda[])=>{
      this.criteriaSelected = {pokemon: r, criteria: this.criteria};
    })
  }

  ngOnDestroy(): void {
    console.log('Dejando Componente')
    this.subResponse.unsubscribe();
    this.loadingResponse.unsubscribe();
  }
}
