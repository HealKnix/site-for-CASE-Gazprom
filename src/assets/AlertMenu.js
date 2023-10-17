let showStart, showEnd

function showAlertMenu(text) {
  let html = /*html*/ `
    <div class="alert-menu">
      <span>${text}</span>
    </div>
  `

  let alertMenu = document.getElementsByTagName('AlertMenu').item(0)

  alertMenu.innerHTML = html

  clearTimeout(showEnd)

  showStart = setTimeout(() => {
    alertMenu.children[0].classList.add('show')
  }, 0)

  showEnd = setTimeout(() => {
    alertMenu.children[0].classList.remove('show')
  }, 2000)
}
