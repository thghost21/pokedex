import { WildPokemonController } from "./controllers/WildPokemonController.js"

class App {

  wildPokemonController = new WildPokemonController()

}

window['app'] = new App()


