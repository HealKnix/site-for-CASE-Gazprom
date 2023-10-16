let content = [...document.getElementsByTagName('hero')][0]

function setStyleCSS(styles) {
  let style = document.createElement('style')
  style.innerHTML = `${styles}`
  content.appendChild(style)
}

function setUserAuth() {
  isUserAuth = confirm('Авторизоваться?')
  if (isUserAuth) {
    document.getElementById('img_user').setAttribute('src', 'src/img/user-logout.svg')
  } else {
    document.getElementById('img_user').setAttribute('src', 'src/img/user.svg')
  }
}

renderHomePage()
