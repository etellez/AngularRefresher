import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../../services/poke-api.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  Pokemons:any = [];
  constructor(
    private PokeService: PokeAPIService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }
  getAllPokemons(){
    this.PokeService.getPokemons().subscribe(pokemons =>{
      console.log(pokemons);
      this.Pokemons = pokemons;
    })
  }

  showPoke(id){
    this.router.navigateByUrl(`pokemons/${id}`);
  }
}
