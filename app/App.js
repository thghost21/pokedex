import { AuthController } from "./Auth/AuthController.js"
import { SandboxPokemonsController } from "./controllers/SandboxPokemonsController.js"
import { WildPokemonController } from "./controllers/WildPokemonController.js"

class App {
  authController = new AuthController()
  wildPokemonController = new WildPokemonController()
  sandboxPokemonsController = new SandboxPokemonsController()
}

window['app'] = new App()


