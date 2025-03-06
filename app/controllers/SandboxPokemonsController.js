import { AppState } from "../AppState.js";
import { sandboxPokemonsService } from "../services/SandboxPokemonsService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxPokemonsController {
  constructor() {
    AppState.on('sandboxPokemons', this.drawSandboxPokemons)


  }

  async saveSandboxPokemons() {
    try {
      await sandboxPokemonsService.createSandboxPokemons()

    } catch (error) {
      Pop.error(error, 'Could not retrieve wild pokemons');
      console.error(error, 'could not get wild pokemons');
    }


  }
  drawSandboxPokemons() {
    const sbPokemon = AppState.sandboxPokemons
    let content = ''
    sbPokemon.forEach(pokemon => content += pokemon.sandboxTemplate)
    const sandPokeElem = document.getElementById('SandboxTemplate')
    sandPokeElem.innerHTML = content

  }

}