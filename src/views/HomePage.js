function renderHomePage() {
  content.innerHTML = /*html*/ `
    <h1 class="hero-text">Будущее за технологиями.</h1>

    <h2 class="info-text">
      Начните использовать возможности передовых устройств для оптимизации производственного
      процесса
    </h2>

    <button id="btn-do-work" onclick="renderSelectingWorkScenarioPage()">Начать работу</button>
  `
  setStyleCSS()
}
