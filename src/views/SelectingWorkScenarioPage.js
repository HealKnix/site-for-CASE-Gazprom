function renderSelectingWorkScenarioPage() {
  content.innerHTML = /*html*/ `
    <div class='bg-blur-page'></div>

    <h1 class="hero-text" style='z-index: 1'>Выбор сценария работы</h1>

    <ul style='z-index: 1'>
      <li class='choice-list'>
        <div class='li__item-wrapper'>
          Выберите устройство
        </div>
        <div class='li__item-wrapper'>
          <dropdown-menu placeholder='Устройство' id='choice-drone' value='' context='choice.device'>
            <item>Дрон 1</item>
            <item>Дрон 2</item>
            <item>АПУ-1</item>
            <item>АПУ-2</item>
            <item>АПУ-3</item>
            <item>АПУ-4</item>
          </dropdown-menu>
        </div>
      </li>
      <li class='choice-list'>
        <div class='li__item-wrapper'>
          Выберите объект исследования
        </div>
        <div class='li__item-wrapper'>
          <dropdown-menu placeholder='Объект исследования' id='choice-object' value='' context='choice.researchObject'>
            <item>КП-1</item>
            <item>КП-2</item>
            <item>КП-3</item>
            <item>КП-4</item>
          </dropdown-menu>
        </div>
      </li>
      <li class='choice-list'>
        <div class='li__item-wrapper'>
          Выберите сценарий работы
        </div>
        <div class='li__item-wrapper'>
          <dropdown-menu class='invert' placeholder='Сценарий работы' id='choice-scenario' value='' context='choice.workScenario'>
            <item>Контроль разливов нефти</item>
            <item>Оценка воздуха</item>
            <item>Ожидание</item>
            <item>Разведка кустовой площадки</item>
            <item>Перевозка грузов</item>
            <item>Ручной режим</item>
          </dropdown-menu>
        </div>
      </li>
    </ul>

    <button
      id="btn-start"
      style='z-index: 0'
      disabled>
      Запуск
    </button>
  `

  choice.method = () => {
    if (choice.device && choice.researchObject && choice.workScenario) {
      document.querySelector('#btn-start').removeAttribute('disabled')
    } else {
      document.querySelector('#btn-start').setAttribute('disabled', '')
    }
  }

  let bgBlur = document.querySelector('.bg-blur')
  bgBlur.classList.add('open')

  setStyleCSS(/*css*/ `
    .li__item-wrapper {
      position: relative;
    }
    dropdown-menu {
      position: absolute;
      background-color: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(10px);
      border-radius: 10px;
      max-width: 500px;
    }
    .choice-list {
      display: grid;
      grid-template-columns: 0.65fr 1fr;
      min-height: 100px;
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
      .li__item-wrapper {
        margin-bottom: 25px;
      }
      dropdown-menu {
        min-height: 55px;
      }
      dropdown-menu[focus].invert {
        flex-direction: column-reverse;
        top: -350px;
      }
      #btn-start {
        margin-bottom: 25px;
      }
    }
  `)
  dropdownMenuUpdate()
}
