import { Pokemon } from './models/Pokemon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /** @type {Pokemon[]}*/
  wildPokemons = []


}

export const AppState = createObservableProxy(new ObservableAppState())