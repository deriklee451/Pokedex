import { appState } from "../AppState.js";
import { Pokedex } from "../Models/Pokedex.js";

const pokeDexApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

class PokedexService {


    async getOnePokemon(name) {
        const res = await pokeDexApi.get(`pokemon/${name}`)
        console.log('get one pokemon', res.data);
        appState.activePokemon = new Pokedex(res.data)
        console.log(appState.activePokemon);
    }


    async getPokedex() {
        const res = await pokeDexApi.get('pokemon?limit=151&offset=0')
        console.log('Got Pokemon', res.data);
        // map will always bring back an array... 
        appState.pokemon = res.data.results.map(p => new Pokedex(p))
        // appState.pokemon = new Pokedex(res.data.results)
    }
}



export const pokedexService = new PokedexService()
