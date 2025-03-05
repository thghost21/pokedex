
export class DetailedPokemon {
  constructor(data) {
    this.name = data.name;
    this.height = data.height;
    this.weight = data.weight;
    this.id = data.id;
    this.img = data.sprites.front_default;


  }
  get activeTemplate() {
    return `
    <div class="pokedexWindow rounded-3 p-4">
            <h2 class="border border-dark rounded ps-2">${this.name}</h2>
            <div class="text-center bg-dark p-2 rounded-5">
              <img class="pokedexImg"
                src="${this.img}"
                alt="${this.name}">
            </div>
            <div class="border border-dark rounded-3 py-3 mt-2">
              <div>
                <span class="fs-2"><span class="mdi mdi-flash"></span>Electric</span>
              </div>
              <div class="fs-4 d-flex justify-content-between p-2">
                <span>Health:</span>
                <span>45 hp</span>
              </div>
              <div class="fs-4 d-flex justify-content-between p-2">
                <span>Attack:</span>
                <span>45 ap</span>
              </div>
              <div class="fs-4 d-flex justify-content-between p-2">
                <span>Defense:</span>
                <span>45 dp</span>
              </div>
              <div class="d-flex fs-4 justify-content-between p-2">
                <span>Speed:</span>
                <span>45 sp</span>
              </div>
              <div class="d-flex fs-4 justify-content-between p-2">
                <span>Weight:</span>
                <span>${this.weight} lbs</span>
              </div>
              <div class="d-flex fs-4 justify-content-between p-2">
                <span>Height:</span>
                <span>${this.height} ft</span>
              </div>
            </div>
            <div class="mt-2 text-end">
              <button onclick="app.sandboxPokemonsController.saveSandboxPokemons()" class="btn btn-danger"> Catch Pokemon!</button>
            </div>
          </div>
    `;
  }
}
