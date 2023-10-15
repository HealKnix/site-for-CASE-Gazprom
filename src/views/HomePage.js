function renderHomePage() {
  content.innerHTML = /*html*/ `
    <h1 class="hero-text">Будущее за технологиями</h1>

    <div class="hero__iner">
      <h2 class="info-text">
        Начните использовать возможности передовых устройств для&nbsp;оптимизации производственного
        процесса
      </h2>

      <button id="btn-do-work" onclick="checkUserAuthAndRedirect()">Начать работу</button>
    </div>
  `
  setStyleCSS(/*css*/ `
    .hero__iner {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
      overflow-y: auto;
    }
  `)
}

function checkUserAuthAndRedirect() {
  if (!isUserAuth) {
    showAlertMenu('Вы не авторизовались')
    return
  }
  renderSelectingWorkScenarioPage()
}
