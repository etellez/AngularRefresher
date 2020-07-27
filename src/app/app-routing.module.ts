import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokeDescriptionComponent } from './components/poke-description/poke-description.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path: 'pokemons', component:PokemonsComponent
  },
  {
    path: 'pokemons/:id', component:PokeDescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
