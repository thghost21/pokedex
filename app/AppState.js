import { Pokemon } from './models/Pokemon.js'
import { DetailedPokemon } from "./models/DetailedPokemon.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /** @type {Pokemon[]}*/
  wildPokemons = []

  /** @type {DetailedPokemon}*/
  activePokemon = null


}

export const AppState = createObservableProxy(new ObservableAppState())