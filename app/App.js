import { PokedexController } from "./Controllers/PokedexController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  pokedexController = new PokedexController()

}

window["app"] = new App();
