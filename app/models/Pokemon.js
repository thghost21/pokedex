export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.img = data.img


  }

  get wildTemplate() {
    return `
    <div>
      <div onclick="app.wildPokemonController.getActivePokemon('${this.name}')" class="fs-2" type="button"><span class="mdi mdi-pokeball pe-2"></span>${this.name}</div>
      <hr>
    </div
    `
  }


}

export class SandboxPokemon extends Pokemon {
  super() {

  }

  get sandboxTemplate() {
    return `
      <div>
      <div onclick="app.wildPokemonController.getActivePokemon('${this.name}')" class="fs-2" type="button"><span class="mdi mdi-pokeball pe-2"></span>${this.name}</div>
      <hr>
    </div
    `
  }

}