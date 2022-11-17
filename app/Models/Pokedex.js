

export class Pokedex {
    constructor(data) {
        this.name = data.name
        this.image = data.sprites
        this.type = data.types
        this.stats = data.stats
    }


    get ActiveTemplate() {
        return `
        <h3 class="col-12 text-center text-primary">${this.name}</h3>
        <img src="${this.image}" alt="">
        <div class="col-6">
          
        </div>
        <div class="col-6">
          
        </div>
        <div class="col-4">${this.type}</div>
        <div class="col-4">${this.stats}</div>
        <div class="col-4"></div>
        <div class="col-4"></div>
        <div class="col-4"></div>
        <div class="col-4"></div>
        <div class="col-4"></div>
        `
    }


    static ListTemplate(pokemon) {
        return `<div class="col-12 selectable p-1" onclick = "app.pokedexController.getOnePokemon('${pokemon.name}')" > ${pokemon.name}</div> `
    }
}