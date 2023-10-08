let ranges = [...document.getElementsByTagName('range')]

ranges.forEach(r => {
  let title = r.getAttribute('title')
  let min = r.getAttribute('min') || 0
  let max = r.getAttribute('max') || 100
  let value = r.getAttribute('value') || Math.round((parseInt(min) + parseInt(max)) / 2)
  r.innerHTML = `
  <div class="wrapper-range">
    <input
      type="range"
      value="${value}"
      min="${min}"
      max="${max}"
      id="range"
      oninput="rangevalue.value=value"
    />
    <input type="number" id="rangevalue" value="${value}" oninput="range.value=value" />
  </div>
  `
  r.children[0].children[0].style.backgroundSize = `${((value - min) * 100) / (max - min)}% 100%`
})

const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  }
  const min = target.min
  const max = target.max
  const value = target.value

  target.style.backgroundSize = ((value - min) * 100) / (max - min) + '% 100%'
}

if (rangeInputs && numberInput) {
  rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
  })

  numberInput.addEventListener('input', handleInputChange)
}
