function renderConnectedEmployeePage() {
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

  <h1 class="hero-text" style='z-index: 1'>Подключённый работник</h1>

  <ul id='list-devices' style='z-index: 1'></ul>`

  for (let i = 0; i < droneList.length; i++) {
    let colorWebSVG = 'black'
    if (droneList[i].connectionQuality === 1) {
      colorWebSVG = 'var(--active-green-dark)'
    } else if (droneList[i].connectionQuality === 2) {
      colorWebSVG = '#adc584'
    } else if (droneList[i].connectionQuality === 3) {
      colorWebSVG = '#7b838a'
    }
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
      <div id='list-status'>Статус: ${droneList[i].researchObject} <br> (${droneList[i].status})</div>

      <svg id='list-connect' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
      <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
      <g><g><g><path fill="${colorWebSVG}" d="M118.9,10.1c-24.2,2.5-44,10-62.4,23.8c-5.8,4.3-18.4,16.9-22.7,22.7C21.3,73.3,13.6,92,10.6,113.4c-0.8,5.4-0.8,23.6,0,29.1c3,21.4,10.8,40.3,23.3,56.8c4.3,5.8,13.1,14.9,19.1,19.8c23.8,19.6,55,29.3,85.3,26.4c27.4-2.6,51.9-13.8,71.7-33c20.5-19.9,32.9-45.7,35.6-74.3c2.8-30.2-6.9-61.5-26.4-85.3c-18.8-22.8-44.8-37.5-74.6-42.1C139.8,10.3,122.9,9.7,118.9,10.1z M132.7,25.9c10.5,5,20.5,24.9,26.1,52c0.5,2.5,0.9,4.8,0.9,5.2c0,0.6-5,0.6-31.8,0.6C100,83.6,96,83.5,96,82.9c0-0.4,0.5-3.2,1.2-6.3c5.4-26.3,15.4-45.7,25.8-50.7C126.6,24.2,129.1,24.2,132.7,25.9z M98.2,31.1c-6.7,10.5-13.4,29.9-16.7,48l-0.8,4.5H57.7c-21.8,0-23.1,0-22.7-0.8c0.1-0.5,1.5-3,3-5.7c12.5-22,32.3-38.6,56.2-46.9c2.4-0.9,4.7-1.6,5-1.6C99.4,28.7,99,29.7,98.2,31.1z M163.4,30.9c20.3,7.5,38.1,21.5,50.2,39.5c2.2,3.2,7.5,12.4,7.5,13c0,0.1-10.4,0.3-23,0.3h-23l-0.5-3.1c-3.1-18.2-10.2-38.7-17-49.4l-1.6-2.5l1.5,0.3C158.3,29.1,161,30,163.4,30.9z M78.8,100.3c-1.8,13.4-1.8,41.8,0,55.1l0.3,2H53.9H28.8l-1.2-4.8c-2.3-9.1-2.9-14.1-2.9-24.8c0-10.7,0.6-15.7,2.9-24.8l1.2-4.7h25.1h25.1L78.8,100.3z M162,98.9c0,0.2,0.3,3.9,0.7,8.2c1.2,13,1,33.2-0.6,47.8l-0.3,2.7h-34h-34l-0.3-2.7c-1.8-17.2-1.8-36.5,0-53.8l0.3-2.6h34C150,98.4,162,98.5,162,98.9z M228.2,103.3c2.4,9.9,2.8,13.6,2.8,24.4c0,10.9-0.5,15.2-2.8,24.8l-1.2,5h-25.1h-25.1l0.3-2c1.8-13.3,1.8-41.8,0-55.1l-0.3-1.9h25.1H227L228.2,103.3z M81.5,176.7c3.2,18.2,10,37.5,16.7,48c0.9,1.3,1.4,2.4,1.2,2.4c-0.8,0-9.8-3.3-13.8-5.1c-20.6-9-39.1-26.6-49.1-46.5l-1.7-3.3h23h23L81.5,176.7z M159.7,172.9c0,1.1-1.7,9-3.2,14.9c-6.5,25.6-18.3,43.6-28.7,43.6c-4,0-8.8-3-12.8-8c-7.8-9.6-13.9-25.1-18.1-45.4c-0.5-2.4-0.9-4.7-0.9-5c0-0.6,5-0.6,31.8-0.6C154.7,172.2,159.7,172.3,159.7,172.9z M219.4,175.5c-10.1,20-28.6,37.5-49.5,46.7c-3.8,1.7-12.7,4.9-13.5,4.9c-0.2,0,0.3-1.1,1.2-2.4c6.8-10.6,13.8-31.1,16.9-49.4l0.5-3.1h23h23L219.4,175.5z"/></g></g></g>
      </svg>

      <div id='list-battery'>
        <span>${droneList[i].battery}</span>
        <div
          id='list-battery-lvl'
          style='background-color: rgb(${currentColor.r},${currentColor.g},${currentColor.b});'
        ></div>
      </div>
      <div id='list-time'>Время с момента запуска: <br> ${droneList[i].startUpTime} </div>
      <button id='btn-control' onclick='redirectOnControlPage(${i})'>Управление</button>
    </li>`

    document.querySelectorAll('#list-battery-lvl')[i].style.width = droneList[i].battery + '%'
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
      padding: 0 5%;
    }
    .choice-list {
      display: grid;
      grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 2fr 1.25fr;
      min-height: 150px;
      justify-items: center;
      align-items: center;
      text-align: center;
      font-size: 18px;
      margin: 0;
      padding: 0 5%;
    }
    .choice-list {
      border-bottom: 2px solid #333333aa;
    }
    .choice-list > button {
      width: 225px;
      height: fit-content;
      padding: 15px 25px;
      font-size: 18px;
    }
    .choice-list > div {
      position: relative;
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
    #list-connect {
      width: 50px;
      height: 50px;
    }
    #list-battery {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 75px;
      height: 35px;
      border: 2px solid white;
      border-radius: 7.5px;
      overflow: ;
    }
    #list-battery > span {
      color: white;
      filter: drop-shadow(0 0 3px #000000aa);
      z-index: 2;
    }
    #list-battery::after {
      position: absolute;
      display: block;
      content: '';
      width: 8px;
      height: 12.5px;
      top: 50%;
      right: -8px;
      transform: translate(0, -50%);
      background-color: white;
      border-radius: 2px;
    }
    #list-battery-lvl {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 5px;
      z-index: 1;
    }

    #btn-control {
      background-color: var(--active-green-dark);
    }
    #btn-control:hover {
      background-color: #0b886d;
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

function redirectOnControlPage(index) {
  renderControlDevicePage(droneList[index])
}
