let checkboxes = [...document.getElementsByTagName('checkbox')]

checkboxes.forEach(cb => {
  let title = cb.getAttribute('title')
  let width = cb.getAttribute('width') || 50
  cb.innerHTML = `
    <div class="checkbox-wrapper" style="--checkbox-size: ${width}px">
      <span class="title">${title}</span>
      <div class="checkbox">
        <input type="checkbox" />
        <div id="loader"></div>
        <div id="caret"></div>
      </div>
      <span class="value">выкл</span>
    </div>
  `
  let checkbox = cb.children[0].children[1].children[0]
  let cb_title = cb.children[0].children[2]
  checkbox.addEventListener('change', () => {
    if (cb_title) cb_title.innerText = checkbox.checked ? 'вкл' : 'выкл'
  })
})
