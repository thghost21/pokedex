import { SandboxPokemonsController } from "./controllers/SandboxPokemonsController.js"
import { WildPokemonController } from "./controllers/WildPokemonController.js"

class App {

  wildPokemonController = new WildPokemonController()
  sandboxPokemonsController = new SandboxPokemonsController()
}

window['app'] = new App()


