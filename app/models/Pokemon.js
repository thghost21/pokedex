export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.img = data.img


  }

  get wildTemplate() {
    return `
    <div>
      <div class="fs-2" type="button"><span class="mdi mdi-pokeball pe-2"></span>${this.name}</div>
      <hr>
    </div
    `
  }

  get activeTemplate() {
    return `
    <div class="pokedexWindow rounded-3 p-4">
        <h2 class="border border-dark rounded ps-2">PikaCHooo</h2>
        <div class="text-center bg-dark p-2 rounded-5">
          <img class="pokedexImg"
            src="https://external-preview.redd.it/0UF4Gqxwe330DKxNz1_GpmkwIDX0e_TyJdXbbkDVm78.jpg?auto=webp&s=5274a519198bd315bd9eb50c2cee0d9a7e0e8126"
            alt="Pikachu Surprised">
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
            <span>45 lbs</span>
          </div>
          <div class="d-flex fs-4 justify-content-between p-2">
            <span>Height:</span>
            <span>4.5 ft</span>
          </div>
        </div>
      </div>
    `
  }
}