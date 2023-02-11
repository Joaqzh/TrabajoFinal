import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Busqueda } from "./busqueda.model";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BusquedaService{

  // Tipo de pokemon
  urlTipo: string = "https://pokeapi.co/api/v2/type/";

  // Pokemon
  urlPokemon: string = "https://pokeapi.co/api/v2/pokemon/";

  nombre : string;

  constructor(private http: HttpClient){

  }

  private busqueda: Busqueda[] = [];
  private busquedaResult = new Subject<Busqueda[]>();
  public loading = new BehaviorSubject<boolean>(true);

  getDetPokemon(pokemon: string){
    return this.http.get(this.urlPokemon + pokemon)
  }

  search(type: string){
    this.loading.next(true)
    this.http.get<Busqueda[]>(this.urlTipo + type)
      .subscribe((data:any)=>{
        this.busqueda = data.pokemon;
        this.busquedaResult.next([...this.busqueda]);


        this.busqueda.forEach((element:any)=>{
          //Conseguir el nombre del Pokemon
          this.nombre = element.pokemon.name

          this.http.get(this.urlPokemon + this.nombre)

        //Conseguir el URL de la Imagen del Pokemonen y se asginga a la url del pokemon (ya existente)
          this.getDetPokemon(this.nombre).subscribe((data:any) => {
          element.pokemon.url = data.sprites.front_default
        })
        })
    },
    ()=>{},
    ()=>{
     this.loading.next(false)
    });
  }

  getBusquedaObservable(){
    return this.busquedaResult.asObservable();
  }

  getLoading(){
    return this.loading;
  }
}
