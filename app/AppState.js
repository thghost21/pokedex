import { Pokemon, SandboxPokemon } from './models/Pokemon.js'
import { DetailedPokemon } from "./models/DetailedPokemon.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Identity } from './Auth/Identity.js'

class ObservableAppState extends EventEmitter {
  /** @type {Identity}*/
  identity = null

  /** @type {Pokemon[]}*/
  wildPokemons = []

  /** @type {SandboxPokemon[]}*/
  sandboxPokemons = []

  /** @type {DetailedPokemon}*/
  activePokemon = null


}

export const AppState = createObservableProxy(new ObservableAppState())