function renderTheMeasuredDataPage() {
  let colorFull = {
    r: 125,
    g: 255,
    b: 0
  }
  let colorEmpty = {
    r: 255,
    g: 25,
    b: 0
  }
  content.innerHTML = /*html*/ `
    <div class='bg-blur-page'></div>

    <h1 class="hero-text" style='z-index: 1'>Измеренные данные</h1>

    <ul id='list-devices' style='z-index: 1'>
      <li class='choice-list' style='min-height: 50px; z-index: 1'>
        <div></div>
        <div></div>
        <span>Т, °С</span>
        <span>Vв, м/с</span>
        <span>Tv, n</span>
        <span>H₂S, %</span>
        <span>CH4, %</span>
        <span>S, м²</span>
        <div></div>
      </li>
    </ul>
  `

  for (let i = 0; i < droneList.length; i++) {
    let currentColor = {
      r:
        (colorFull.r * droneList[i].battery) / 100 +
        (colorEmpty.r - (colorEmpty.r * droneList[i].battery) / 100),
      g:
        (colorFull.g * droneList[i].battery) / 100 +
        (colorEmpty.g - (colorEmpty.g * droneList[i].battery) / 100),
      b:
        (colorFull.b * droneList[i].battery) / 100 +
        (colorEmpty.b - (colorEmpty.b * droneList[i].battery) / 100)
    }

    document.querySelector('#list-devices').innerHTML += /*html*/ `
      <li class='choice-list' style='z-index: 1'>
        <div id='list-name'>${droneList[i].name}</div>
        <div id='list-img' style='background: url(${droneList[i].imageUrl}) no-repeat center'></div>
        <span>-</span>
        <span>-</span>
        <span>-</span>
        <span>-</span>
        <span>-</span>
        <span>-</span>
        <div id='list-data-sending'>
          <span></span>
          <div id='list-data-sending__loader'>
            <span id="list-data-sending__loader__percentage">${droneList[i].battery}%</span>
            <svg width="150" height="150" style="transform: rotate(-90deg)">
              <circle class="myCircle" cx="75" cy="75" r="37.5" fill="none" stroke="rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})" stroke-width="15" stroke-linecap="round" />
            </svg>
          </div>
        </div>
      </li>
    `

    var circle = document.getElementsByClassName('myCircle')[i]

    var radius = parseInt(circle.getAttribute('r'))
    var circumference = 2 * Math.PI * radius

    var sliderValue = parseInt(100 - droneList[i].battery)
    var newLength = circumference - (sliderValue / 100) * circumference /* Изменение направления */

    circle.style.strokeDasharray = newLength + ' ' + circumference
  }
  let burgerMenu = document.querySelector('.burger-menu')
  let menuWrapper = document.querySelector('.menu-wrapper')
  burgerMenu.classList.remove('open')
  menuWrapper.classList.remove('open')
  menuOpen = false
  setStyleCSS(/*css*/ `
    hero {
      justify-content: inherit;
      padding: 0;
      overflow-y: none;
    }
    .hero-text {
      padding: 15px 5%;
    }
    .choice-list {
      display: grid;
      grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
      min-height: 150px;
      justify-items: center;
      align-items: center;
      text-align: center;
      font-size: 18px;
      margin: 0;
      padding: 0 5%;
      border-bottom: 2px solid #333333aa;
    }
    .choice-list > button {
      width: 225px;
      height: fit-content;
      padding: 15px 25px;
      font-size: 18px;
    }
    .choice-list > div,
    .choice-list > span {
      position: relative;
      font-size: 22px;
      font-weight: 500;
      color: var(--white);
    }
    .bg-blur-page {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      z-index: 0;
    }

    #list-devices {
      width: 100%;
      height: 100%;
      background-color: #000000bb;
      backdrop-filter: blur(10px);
      overflow-y: auto;
    }
    #list-devices::-webkit-scrollbar {
      width: 4px;
    }
    #list-devices::-webkit-scrollbar-thumb {
      background-color: var(--active-green-dark);
    }
    #list-devices::-webkit-scrollbar-track {
      background-color: transparent;
    }

    #list-img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    #list-data-sending__loader__percentage {
      position: absolute;
      left: 50%;
      top: 50%;
      color: var(--white);
      font-size: 18px;
      transform: translate3d(-50%, -50%, 0);
    }

    @media (width < 685px) {
      hero {
        overflow-y: auto;
        justify-content: inherit;
      }
      .hero-text {
        margin-top: 25px;
      }
      .choice-list {
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;
        min-height: auto;
      }
    }
    @media (width < 1120px) {
      .choice-list {
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;
        min-height: 500px;
        padding: 25px 0;
      }
    }
  `)
  dropdownMenuUpdate()
}
