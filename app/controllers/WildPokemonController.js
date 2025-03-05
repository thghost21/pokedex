import { AppState } from "../AppState.js";
import { wildPokemonsService } from "../services/WildPokemonService.js";
import { Pop } from "../utils/Pop.js";

export class WildPokemonController {
  constructor() {
    AppState.on('wildPokemons', this.drawWildPokemons)
    console.log('WILD Pokemon Controller ready');
    this.getWildPokemons()

  }

  async getWildPokemons() {
    try {
      console.log('getting wild pokemon');
      await wildPokemonsService.retrieveWildPokemons()
    } catch (error) {
      Pop.error(error, 'Could not retrieve wild pokemons');
      console.error(error, 'could not get wild pokemons');


    }
  }
  drawWildPokemons() {
    const pokemons = AppState.wildPokemons
    let content = ''
    pokemons.forEach(pokemon => content += pokemon.wildTemplate);
    const wildElem = document.getElementById('WildTemplate')
    wildElem.innerHTML = content
  }



}