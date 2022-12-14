import { appState } from "../AppState.js"
import { Pokedex } from "../Models/Pokedex.js"
import { pokedexService } from "../Services/PokedexService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawPokemon() {
    let pokemon = appState.pokemon
    let template = ''
    pokemon.forEach(p => template += Pokedex.ListTemplate(p))
    setHTML('api-poke', template)
}

function _drawActivePokemon() {
    let pokemon = appState.activePokemon
    if (pokemon) {
        setHTML('active-pokemon', pokemon.ActiveTemplate)
    } else {

    }
}






export class PokedexController {
    constructor() {

        appState.on('activePokemon', _drawActivePokemon)
        appState.on('pokemon', _drawPokemon)
        this.getPokedex()
    }



    async getPokedex() {
        try {
            await pokedexService.getPokedex()
        } catch (error) {
            console.error(error);
            Pop.error(error.message)
        }
    }

    async getOnePokemon(name) {
        try {

            await pokedexService.getOnePokemon(name)
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }


}




