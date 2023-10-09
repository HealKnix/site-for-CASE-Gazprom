let html = `
<h1 class="hero-text">Будущее за технологиями.</h1>

<h2 class="info-text">
  Начните использовать возможности передовых устройств для оптимизации производственного
  процесса
</h2>

<button id="btn-do-work">Начать работу</button>
`

let content = [...document.getElementsByTagName('hero')][0]

export function render() {
  content.innerHTML = html
  setStyleCSS()
}

function setStyleCSS(styles) {
  let style = document.createElement('style')
  style.innerHTML = `${styles}`
  content.appendChild(style)
}
