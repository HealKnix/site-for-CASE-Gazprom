function renderControlDevicePage(currentDevice) {
  content.innerHTML = /*html*/ `
    <h1 class="hero-text">Управление ${currentDevice.name}</h1>

    <h2 class="control__wrapper">
      <div class ="monitor">
        <div class="row-options">
          <div class="option">
            <span>${currentDevice.name}</span>
          </div>
          <div class="option">
            <span>${currentDevice.connectionQualityText}</span>
          </div>
          <div class="option">
            <span>${currentDevice.name}</span>
            <span>(${currentDevice.status})</span>
          </div>
          <div class="option">
            <span>${currentDevice.researchObject}</span>
          </div>
          <div class="option"></div>
          <div class="option"></div>
        </div>
      </div>
    </h2>
  `
  setStyleCSS(/*css*/ `
    hero {
      justify-content: inherit;
      padding: 0;
      overflow-y: none;
    }
    .hero-text {
      padding: 15px 5%;
    }
    .control__wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: #333;
      overflow: hidden;
    }
    .monitor {
      --index: 1vw + 1vh;

      position: absolute;
      width: calc(var(--index) * 16 * 7);
      height: calc(var(--index) * 9 * 7);
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      background-color: #bbb;
      border: 5px solid var(--white);
    }
    .row-options {
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 1fr 1fr 1fr;
      width: 100%;
      height: 100px;
      background-color: #333333BB;
    }
    .row-options > .option:not(:first-child) {
      border-left: 3px solid white;
    }
    .row-options > .option {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .row-options > .option > span {
      color: var(--white);
      font-size: 18px;
    }
  `)
}
