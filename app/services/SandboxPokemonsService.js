import { AppState } from "../AppState.js"
import { api } from "../utils/Axios.js"

class SandboxPokemonsService {
  async createSandboxPokemons() {
    const pokemon = AppState.activePokemon
    const response = await api.post('api/pokemon', pokemon)
    console.log('Created Pokemon', response.data);

  }





}

export const sandboxPokemonsService = new SandboxPokemonsService()