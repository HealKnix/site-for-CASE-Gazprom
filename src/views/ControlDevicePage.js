function renderControlDevicePage(currentDevice) {
  content.innerHTML = /*html*/ `
    <h1 class="hero-text">Управление ${currentDevice.name}</h1>

    <h2 class="info-text">
      Экран камеры*
    </h2>

    <button id="btn-do-work" onclick="renderSelectingWorkScenarioPage()">Начать работу</button>
  `
  setStyleCSS()
}
