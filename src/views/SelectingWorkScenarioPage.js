function renderSelectingWorkScenarioPage() {
  content.innerHTML = `
  <div class='bg-blur-page'></div>

  <h1 class="hero-text" style='z-index: 1'>Выбор сценария работы</h1>

  <ul style='z-index: 1'>
    <li class='choice-list'>
      <div class='li__item-wrapper'>
        Выберите устройство
      </div>
      <div class='li__item-wrapper'>
        <dropdown-menu placeholder='Устройство' title='' id='choice-drone'>
          <item>Дрон 1</item>
          <item>Дрон 2</item>
          <item>Дрон 3</item>
          <item>Дрон 4</item>
          <item>АПУ-1</item>
          <item>АПУ-2</item>
        </dropdown-menu>
      </div>
    </li>
    <li class='choice-list'>
      <div class='li__item-wrapper'>
        Выберите объект исследования
      </div>
      <div class='li__item-wrapper'>
        <dropdown-menu placeholder='Объект исследования' title='' id='choice-object'>
          <item>КП-4</item>
        </dropdown-menu>
      </div>
    </li>
    <li class='choice-list'>
      <div class='li__item-wrapper'>
        Выберите сценарий работы
      </div>
      <div class='li__item-wrapper'>
        <dropdown-menu placeholder='Сценарий работы' title='' id='choice-scenario'>
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
    id="btn-do-work"
    style='z-index: 0'
    onclick='getChoiceValues()'>
    Запуск
  </button>
  `
  let bgBlur = document.querySelector('.bg-blur')
  bgBlur.classList.add('open')
  setStyleCSS(`
    .li__item-wrapper {
      position: relative;
    }
    dropdown-menu {
      position: absolute;
      background-color: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px);
      border-radius: 10px;
      max-width: 500px;
      font-weight: 500;
    }
    .choice-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
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
      .choice-list {
        grid-template-columns: 1fr;
      }
      .li__item-wrapper {
        margin-bottom: 25px;
      }
      dropdown-menu {
        position: relative;
      }
    }
  `)
  dropdownMenuUpdate()
}

function getChoiceValues() {
  choiceDevice = document.getElementById('choice-drone').getAttribute('value')
  choiceObject = document.getElementById('choice-object').getAttribute('value')
  choiceScenario = document.getElementById('choice-scenario').getAttribute('value')
}
