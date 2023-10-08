let dropdown_menus = [...document.getElementsByTagName('dropdown-menu')]

dropdown_menus.forEach(dm => {
  let title = dm.getAttribute('title')
  let placeholder = dm.getAttribute('placeholder')
  let items = [...dm.children]
  let itemNames = items.map(el => el.innerText)
  let value = placeholder
  let activeIndex = 0

  let style = document.createElement('style')
  style.innerHTML = `
    dropdown-menu::before {
      content: '${title}';
    }
  `
  document.head.appendChild(style)

  dm.innerHTML = `<span>${value}</span>`

  dm.addEventListener('click', () => {
    if (dm.getAttributeNames().includes('focus')) {
      dm.removeAttribute('focus')
      dm.innerHTML = `<span>${value}</span>`
      return
    }

    dm.setAttribute('focus', '')
    dm.innerHTML = `<span>${placeholder}</span>`

    if ([...dm.attributes].some(el => el.nodeName == 'focus')) {
      for (let i = 0; i < itemNames.length; i++) {
        dm.innerHTML += `<item>${itemNames[i]}</item>`
      }

      items = [...dm.children]
      items[activeIndex].classList.add('active')

      for (let i = 1; i < items.length; i++) {
        items[i].addEventListener('click', () => {
          value = items[i].innerText
          dm.setAttribute('value', value)
          activeIndex = i
        })
      }
    }
  })
  document.addEventListener('click', event => {
    if (!dm.contains(event.target) && [...dm.attributes].some(el => el.name === 'focus')) {
      dm.removeAttribute('focus')
      dm.innerHTML = `<span>${value}</span>`
    }
  })
})
