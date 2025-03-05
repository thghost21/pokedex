import { AppState } from "../AppState.js";
import { wildPokemonsService } from "../services/WildPokemonService.js";
import { Pop } from "../utils/Pop.js";

export class WildPokemonController {
  constructor() {
    AppState.on('wildPokemons', this.drawWildPokemons)
    AppState.on('activePokemon', this.drawActivePokemon)
    console.log('WILD Pokemon Controller ready');
    this.getWildPokemons()

  }

  drawWildPokemons() {
    const pokemons = AppState.wildPokemons
    let content = ''
    pokemons.forEach(pokemon => content += pokemon.wildTemplate);
    const wildElem = document.getElementById('WildTemplate')
    wildElem.innerHTML = content
  }

  drawActivePokemon() {
    const pokemon = AppState.activePokemon
    const activeElem = document.getElementById('ActiveTemplate')
    activeElem.innerHTML = pokemon.activeTemplate
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

  async getActivePokemon(name) {
    try {
      console.log('Getting active pokemon');
      await wildPokemonsService.retrieveActivePokemon(name)
    } catch (error) {
      Pop.error(error, 'Could not retrieve Active pokemon');
      console.error(error, 'could not get wild pokemon');
    }
  }

}