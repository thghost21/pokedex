import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { DetailedPokemon } from "../models/DetailedPokemon.js";
import { pokeApi } from "../utils/Axios.js"

class WildPokemonsService {
  async retrieveWildPokemons() {
    const response = await pokeApi.get(('pokemon?limit=151'), 'pokemon')

    console.log('GOT POKEMON', response.data);
    const pokemons = response.data.results.map(pojo => new Pokemon(pojo))
    AppState.wildPokemons = pokemons


  }

  async retrieveActivePokemon(name) {
    const response = await pokeApi.get(`pokemon/${name}`)
    console.log("found pokemon ", response.data, name);
    AppState.activePokemon = new DetailedPokemon(response.data)
    console.log(AppState.activePokemon);




  }


}

export const wildPokemonsService = new WildPokemonsService()