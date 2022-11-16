

export class Pokedex {
    constructor(data) {
        this.name = data.name
    }


    static ListTemplate(pokemon) {
        return `<div class="col-12 selectable p-1" onclick = "app.pokedexController.getOnePokemon('${pokemon.name}')" > ${pokemon.name}</div> `
    }
}