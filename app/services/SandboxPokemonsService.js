import { AppState } from "../AppState.js"
import { SandboxPokemon } from "../models/Pokemon.js";
import { api } from "../utils/Axios.js"

class SandboxPokemonsService {

  async createSandboxPokemons() {
    const pokemon = AppState.activePokemon
    const response = await api.post('api/pokemon', pokemon)
    console.log('Created Pokemon', response.data);
    const newPokemon = new SandboxPokemon(response.data)
    AppState.sandboxPokemons.push(newPokemon)

  }





}

export const sandboxPokemonsService = new SandboxPokemonsService()