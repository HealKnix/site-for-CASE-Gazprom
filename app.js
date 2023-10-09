var menu = document.querySelector('.menu-wrapper')
var textMenu = document.querySelector('header > .menu > .burger-menu')
var burgerMenu = document.querySelector('.burger-menu')

var menuOpen = false

burgerMenu.addEventListener('mousedown', function () {
  if (!menuOpen) {
    burgerMenu.classList.add('open')
    textMenu.classList.add('open')
    menu.classList.add('open')
    menuOpen = true
  } else {
    burgerMenu.classList.remove('open')
    textMenu.classList.remove('open')
    menu.classList.remove('open')
    menuOpen = false
  }
})

import * as HomePage from '/src/views/HomePage.js'
import * as ConnectedEmployeePag from '/src/views/ConnectedEmployeePage.js'
import * as SelectingWorkScenarioPage from '/src/views/SelectingWorkScenarioPage.js'

HomePage.render()
