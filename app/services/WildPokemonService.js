import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeApi } from "../utils/Axios.js"

class WildPokemonsService {
  async retrieveWildPokemons() {
    const response = await pokeApi.get('pokemon')
    console.log('GOT POKEMON', response.data);
    const pokemons = response.data.results.map(pojo => new Pokemon(pojo))
    AppState.wildPokemons = pokemons


  }



}

export const wildPokemonsService = new WildPokemonsService()