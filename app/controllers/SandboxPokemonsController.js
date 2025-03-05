import { sandboxPokemonsService } from "../services/SandboxPokemonsService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxPokemonsController {
  constructor() {


  }

  async saveSandboxPokemons() {
    try {
      await sandboxPokemonsService.createSandboxPokemons()

    } catch (error) {
      Pop.error(error, 'Could not retrieve wild pokemons');
      console.error(error, 'could not get wild pokemons');
    }


  }

}