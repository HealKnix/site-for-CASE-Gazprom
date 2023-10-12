function showAlertMenu(text) {
  let html = /*html*/ `
    <div class="alert-menu">
      <span>${text}</span>
    </div>
  `

  let alertMenu = document.getElementsByTagName('AlertMenu').item(0)

  alertMenu.innerHTML = html

  setTimeout(() => {
    alertMenu.children[0].classList.add('show')
  }, 0)

  setTimeout(() => {
    alertMenu.children[0].classList.remove('show')
  }, 1500)
}
