let content = [...document.getElementsByTagName('hero')][0]

function setStyleCSS(styles) {
  let style = document.createElement('style')
  style.innerHTML = `${styles}`
  content.appendChild(style)
}

renderConnectedEmployeePage()
