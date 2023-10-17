function renderControlDevicePage(currentDevice) {
  let colorFull = {
    r: 125,
    g: 255,
    b: 0
  }
  let colorEmpty = {
    r: 255,
    g: 25,
    b: 0
  }
  let currentColor = {
    r:
      (colorFull.r * currentDevice.battery) / 100 +
      (colorEmpty.r - (colorEmpty.r * currentDevice.battery) / 100),
    g:
      (colorFull.g * currentDevice.battery) / 100 +
      (colorEmpty.g - (colorEmpty.g * currentDevice.battery) / 100),
    b:
      (colorFull.b * currentDevice.battery) / 100 +
      (colorEmpty.b - (colorEmpty.b * currentDevice.battery) / 100)
  }

  let colorWebSVG = 'black'
  if (currentDevice.connectionQuality === 2) {
    colorWebSVG = 'var(--active-green-dark)'
  } else if (currentDevice.connectionQuality === 1) {
    colorWebSVG = '#adc584'
  } else if (currentDevice.connectionQuality === 0) {
    colorWebSVG = '#7b838a'
  }

  content.innerHTML = /*html*/ `
    <h1 class="hero-text">Экран управления</h1>

    <div class="control__wrapper">
      <div class="control__presets">
        <span>Предустановленные настройки</span>
        <span>Макс. удалённость от точки запуска - 400 м</span>
        <span>Макс. скорость - 20 км/ч</span>
        <span>Макс. время передвижения - 45 мин.</span>
      </div>
      <div class ="control__monitor">
        <div class="row-options">
          <div class="option">
            <span>Режим Д</span>
          </div>
          <div class="option">
            <svg style="position: absolute; left: 30px;" id='list-connect' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
              <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
              <g><g><g><path fill="${colorWebSVG}" d="M118.9,10.1c-24.2,2.5-44,10-62.4,23.8c-5.8,4.3-18.4,16.9-22.7,22.7C21.3,73.3,13.6,92,10.6,113.4c-0.8,5.4-0.8,23.6,0,29.1c3,21.4,10.8,40.3,23.3,56.8c4.3,5.8,13.1,14.9,19.1,19.8c23.8,19.6,55,29.3,85.3,26.4c27.4-2.6,51.9-13.8,71.7-33c20.5-19.9,32.9-45.7,35.6-74.3c2.8-30.2-6.9-61.5-26.4-85.3c-18.8-22.8-44.8-37.5-74.6-42.1C139.8,10.3,122.9,9.7,118.9,10.1z M132.7,25.9c10.5,5,20.5,24.9,26.1,52c0.5,2.5,0.9,4.8,0.9,5.2c0,0.6-5,0.6-31.8,0.6C100,83.6,96,83.5,96,82.9c0-0.4,0.5-3.2,1.2-6.3c5.4-26.3,15.4-45.7,25.8-50.7C126.6,24.2,129.1,24.2,132.7,25.9z M98.2,31.1c-6.7,10.5-13.4,29.9-16.7,48l-0.8,4.5H57.7c-21.8,0-23.1,0-22.7-0.8c0.1-0.5,1.5-3,3-5.7c12.5-22,32.3-38.6,56.2-46.9c2.4-0.9,4.7-1.6,5-1.6C99.4,28.7,99,29.7,98.2,31.1z M163.4,30.9c20.3,7.5,38.1,21.5,50.2,39.5c2.2,3.2,7.5,12.4,7.5,13c0,0.1-10.4,0.3-23,0.3h-23l-0.5-3.1c-3.1-18.2-10.2-38.7-17-49.4l-1.6-2.5l1.5,0.3C158.3,29.1,161,30,163.4,30.9z M78.8,100.3c-1.8,13.4-1.8,41.8,0,55.1l0.3,2H53.9H28.8l-1.2-4.8c-2.3-9.1-2.9-14.1-2.9-24.8c0-10.7,0.6-15.7,2.9-24.8l1.2-4.7h25.1h25.1L78.8,100.3z M162,98.9c0,0.2,0.3,3.9,0.7,8.2c1.2,13,1,33.2-0.6,47.8l-0.3,2.7h-34h-34l-0.3-2.7c-1.8-17.2-1.8-36.5,0-53.8l0.3-2.6h34C150,98.4,162,98.5,162,98.9z M228.2,103.3c2.4,9.9,2.8,13.6,2.8,24.4c0,10.9-0.5,15.2-2.8,24.8l-1.2,5h-25.1h-25.1l0.3-2c1.8-13.3,1.8-41.8,0-55.1l-0.3-1.9h25.1H227L228.2,103.3z M81.5,176.7c3.2,18.2,10,37.5,16.7,48c0.9,1.3,1.4,2.4,1.2,2.4c-0.8,0-9.8-3.3-13.8-5.1c-20.6-9-39.1-26.6-49.1-46.5l-1.7-3.3h23h23L81.5,176.7z M159.7,172.9c0,1.1-1.7,9-3.2,14.9c-6.5,25.6-18.3,43.6-28.7,43.6c-4,0-8.8-3-12.8-8c-7.8-9.6-13.9-25.1-18.1-45.4c-0.5-2.4-0.9-4.7-0.9-5c0-0.6,5-0.6,31.8-0.6C154.7,172.2,159.7,172.3,159.7,172.9z M219.4,175.5c-10.1,20-28.6,37.5-49.5,46.7c-3.8,1.7-12.7,4.9-13.5,4.9c-0.2,0,0.3-1.1,1.2-2.4c6.8-10.6,13.8-31.1,16.9-49.4l0.5-3.1h23h23L219.4,175.5z"/></g></g></g>
            </svg>
            <span id="connectText" style="color: ${colorWebSVG}">${currentDevice.connectionQualityText}</span>
          </div>
          <div class="option" style="flex-direction: column;">
            <span>${currentDevice.name}</span>
            <span>(${currentDevice.status})</span>
          </div>
          <div class="option">
            <span>${currentDevice.researchObject}</span>
          </div>
          <div class="option">
            <div id='battery'>
              <span>${currentDevice.battery}%</span>
              <div
                id='battery-lvl'
                style='background-color: rgb(${currentColor.r},${currentColor.g},${currentColor.b});'></div>
            </div>
          </div>
          <div class="option">
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 8C9.79111 8 8.00024 9.79086 8.00024 12C8.00024 14.2091 9.79111 16 12.0002 16C14.2094 16 16.0002 14.2091 16.0002 12C16.0002 9.79086 14.2094 8 12.0002 8ZM10.0002 12C10.0002 10.8954 10.8957 10 12.0002 10C13.1048 10 14.0002 10.8954 14.0002 12C14.0002 13.1046 13.1048 14 12.0002 14C10.8957 14 10.0002 13.1046 10.0002 12Z" fill="#ffffff"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2867 0.5C9.88583 0.5 8.6461 1.46745 8.37171 2.85605L8.29264 3.25622C8.10489 4.20638 7.06195 4.83059 6.04511 4.48813L5.64825 4.35447C4.32246 3.90796 2.83873 4.42968 2.11836 5.63933L1.40492 6.83735C0.67773 8.05846 0.954349 9.60487 2.03927 10.5142L2.35714 10.7806C3.12939 11.4279 3.12939 12.5721 2.35714 13.2194L2.03927 13.4858C0.954349 14.3951 0.67773 15.9415 1.40492 17.1626L2.11833 18.3606C2.83872 19.5703 4.3225 20.092 5.64831 19.6455L6.04506 19.5118C7.06191 19.1693 8.1049 19.7935 8.29264 20.7437L8.37172 21.1439C8.6461 22.5325 9.88584 23.5 11.2867 23.5H12.7136C14.1146 23.5 15.3543 22.5325 15.6287 21.1438L15.7077 20.7438C15.8954 19.7936 16.9384 19.1693 17.9553 19.5118L18.3521 19.6455C19.6779 20.092 21.1617 19.5703 21.8821 18.3606L22.5955 17.1627C23.3227 15.9416 23.046 14.3951 21.9611 13.4858L21.6432 13.2194C20.8709 12.5722 20.8709 11.4278 21.6432 10.7806L21.9611 10.5142C23.046 9.60489 23.3227 8.05845 22.5955 6.83732L21.8821 5.63932C21.1617 4.42968 19.678 3.90795 18.3522 4.35444L17.9552 4.48814C16.9384 4.83059 15.8954 4.20634 15.7077 3.25617L15.6287 2.85616C15.3543 1.46751 14.1146 0.5 12.7136 0.5H11.2867ZM10.3338 3.24375C10.4149 2.83334 10.7983 2.5 11.2867 2.5H12.7136C13.2021 2.5 13.5855 2.83336 13.6666 3.24378L13.7456 3.64379C14.1791 5.83811 16.4909 7.09167 18.5935 6.38353L18.9905 6.24984C19.4495 6.09527 19.9394 6.28595 20.1637 6.66264L20.8771 7.86064C21.0946 8.22587 21.0208 8.69271 20.6764 8.98135L20.3586 9.24773C18.6325 10.6943 18.6325 13.3057 20.3586 14.7523L20.6764 15.0186C21.0208 15.3073 21.0946 15.7741 20.8771 16.1394L20.1637 17.3373C19.9394 17.714 19.4495 17.9047 18.9905 17.7501L18.5936 17.6164C16.4909 16.9082 14.1791 18.1618 13.7456 20.3562L13.6666 20.7562C13.5855 21.1666 13.2021 21.5 12.7136 21.5H11.2867C10.7983 21.5 10.4149 21.1667 10.3338 20.7562L10.2547 20.356C9.82113 18.1617 7.50931 16.9082 5.40665 17.6165L5.0099 17.7501C4.55092 17.9047 4.06104 17.714 3.83671 17.3373L3.1233 16.1393C2.9058 15.7741 2.97959 15.3073 3.32398 15.0186L3.64185 14.7522C5.36782 13.3056 5.36781 10.6944 3.64185 9.24779L3.32398 8.98137C2.97959 8.69273 2.9058 8.2259 3.1233 7.86067L3.83674 6.66266C4.06106 6.28596 4.55093 6.09528 5.0099 6.24986L5.40676 6.38352C7.50938 7.09166 9.82112 5.83819 10.2547 3.64392L10.3338 3.24375Z" fill="#ffffff"/>
            </svg>
          </div>
        </div>
        <div id="mini-map"></div>
        <div id="statistic">
          <span>P: 200 м</span>
          <span>Скор.: 10 км/ч</span>
          <span>T: 19°C</span>
          <span>Vв: 5 м/с</span>
          <span>H₂S: 10 мг/м³</span>
        </div>
        <div id="focus">
          <svg id="_Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.29 251.76">
            <defs>
              <style>
                .cls-1 {
                  fill: none;
                  stroke: #fff;
                  stroke-miterlimit: 10;
                  stroke-width: 5px;
                }
              </style>
            </defs>
            <path class="cls-1" d="m153.14,247.73c47.88-10.95,85.28-49.4,94.69-97.85m-245.38,0c9.93,51.12,51.01,91.1,102.69,99.41M247.83,101.88c-9.41-48.45-46.81-86.9-94.69-97.85m-48-1.56C53.46,10.78,12.38,50.76,2.45,101.88"/>
          </svg>
        </div>
        <div id="record_btn"></div>
      </div>
      <div class="control__tooling">
        <span>Оборудование</span>
        <div class="card">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="3 0 24 24"><g fill="#0fa966"><path d="m15 5.5c0-.27614.2239-.5.5-.5h2c.2761 0 .5.22386.5.5s-.2239.5-.5.5h-2c-.2761 0-.5-.22386-.5-.5z"/><path d="m15 7.5c0-.27614.2239-.5.5-.5h3c.2761 0 .5.22386.5.5s-.2239.5-.5.5h-3c-.2761 0-.5-.22386-.5-.5z"/><path d="m15 9.5c0-.27614.2239-.5.5-.5h2c.2761 0 .5.22386.5.5s-.2239.5-.5.5h-2c-.2761 0-.5-.22386-.5-.5z"/><path d="m15 11.5c0-.2761.2239-.5.5-.5h3c.2761 0 .5.2239.5.5s-.2239.5-.5.5h-3c-.2761 0-.5-.2239-.5-.5z"/><path d="m15 13.5c0-.2761.2239-.5.5-.5h2c.2761 0 .5.2239.5.5s-.2239.5-.5.5h-2c-.2761 0-.5-.2239-.5-.5z"/><g clip-rule="evenodd" fill-rule="evenodd"><path d="m11 15.1119-.4993.2888c-.89929.5203-1.5007 1.4901-1.5007 2.5993 0 1.6569 1.3431 3 3 3s3-1.3431 3-3c0-1.1092-.6014-2.079-1.5007-2.5993l-.4993-.2888v-11.1119c0-.55228-.4477-1-1-1s-1 .44772-1 1zm-1-11.1119c0-1.10457.8954-2 2-2s2 .89543 2 2v10.5351c1.1956.6916 2 1.9843 2 3.4649 0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4 0-1.4806.8044-2.7733 2-3.4649z"/><path d="m12 19c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1zm0 1c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2z"/><path d="m12 3.5c.2761 0 .5.22386.5.5v12c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5v-12c0-.27614.2239-.5.5-.5z"/></g></g></svg>
          <span>Датчик температуры</span>
        </div>
        <div class="card">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wind" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path stroke="#0fa966" d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24"/>
            <path stroke="#0fa966" d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24"/>
            <path stroke="#0fa966" d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24"/>
          </svg>
          <span>Датчик ветра</span>
        </div>
        <div class="card">
          <svg id="Capa_1" width="50" height="50" enable-background="new 0 0 511.998 511.998" viewBox="0 0 511.998 511.998" xmlns="http://www.w3.org/2000/svg"><g><path fill="#0fa966" d="m355.542 77.308v-52.96c0-13.426-10.922-24.348-24.348-24.348h-69.146c-13.426 0-24.348 10.922-24.348 24.348v52.612h-73.745c-47.367 0-85.903 38.536-85.903 85.903v263.231c0 47.367 38.536 85.903 85.903 85.903h184.087c47.367 0 85.903-38.536 85.903-85.903v-263.231c.001-44.838-34.537-81.74-78.403-85.555zm-102.841-52.96c0-5.155 4.193-9.348 9.348-9.348h69.146c5.155 0 9.348 4.193 9.348 9.348v52.612h-87.842zm166.245 401.747c0 39.096-31.807 70.903-70.903 70.903h-184.087c-39.096 0-70.903-31.807-70.903-70.903v-263.232c0-39.096 31.807-70.903 70.903-70.903h184.087c39.096 0 70.903 31.807 70.903 70.903z"/><path fill="#0fa966" fill="#0fa966" d="m348.039 116.958h-184.08c-25.315 0-45.91 20.595-45.91 45.91v233.92c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-233.92c0-17.044 13.866-30.91 30.91-30.91h184.08c17.044 0 30.91 13.866 30.91 30.91v263.23c0 17.038-13.866 30.9-30.91 30.9h-184.08c-16.742 0-30.604-13.612-30.901-30.343-.073-4.096-3.416-7.367-7.497-7.367-.045 0-.09 0-.136.001-4.141.074-7.439 3.491-7.366 7.632.441 24.855 21.032 45.077 45.899 45.077h184.08c25.315 0 45.91-20.591 45.91-45.9v-263.23c.001-25.315-20.594-45.91-45.909-45.91z"/><path fill="#0fa966" d="m275.479 156.958h-102.37c-13.818 0-25.06 11.242-25.06 25.06v56.42c0 13.818 11.242 25.06 25.06 25.06h165.78c13.818 0 25.06-11.242 25.06-25.06v-56.42c0-13.818-11.242-25.06-25.06-25.06h-33.51c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h33.51c5.547 0 10.06 4.513 10.06 10.06v56.42c0 5.547-4.513 10.06-10.06 10.06h-165.78c-5.547 0-10.06-4.513-10.06-10.06v-56.42c0-5.547 4.513-10.06 10.06-10.06h102.37c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path fill="#0fa966" d="m296.622 21.987c-4.142 0-7.5 3.358-7.5 7.5v32.987c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-32.987c0-4.142-3.358-7.5-7.5-7.5z"/><path fill="#0fa966" d="m320.093 21.987c-4.142 0-7.5 3.358-7.5 7.5v32.987c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-32.987c0-4.142-3.358-7.5-7.5-7.5z"/><path fill="#0fa966" d="m273.15 21.987c-4.142 0-7.5 3.358-7.5 7.5v32.987c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-32.987c0-4.142-3.358-7.5-7.5-7.5z"/><path fill="#0fa966" d="m346.446 336.394h-180.894c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h180.894c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path fill="#0fa966" d="m346.446 370.341h-180.894c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h180.894c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path fill="#0fa966" d="m346.446 404.289h-180.894c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h180.894c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path fill="#0fa966" fill="#0fa966" d="m182.045 323.94h28.497c13.23 0 23.993-10.763 23.993-23.993s-10.763-23.994-23.993-23.994h-28.497c-13.23 0-23.994 10.764-23.994 23.994s10.764 23.993 23.994 23.993zm0-32.986h28.497c4.959 0 8.993 4.035 8.993 8.994s-4.034 8.993-8.993 8.993h-28.497c-4.959 0-8.994-4.034-8.994-8.993s4.035-8.994 8.994-8.994z"/><path fill="#0fa966" d="m329.953 275.954h-28.497c-13.23 0-23.994 10.764-23.994 23.994s10.764 23.993 23.994 23.993h28.497c13.23 0 23.993-10.763 23.993-23.993s-10.763-23.994-23.993-23.994zm0 32.986h-28.497c-4.959 0-8.994-4.034-8.994-8.993s4.035-8.994 8.994-8.994h28.497c4.959 0 8.993 4.035 8.993 8.994s-4.034 8.993-8.993 8.993z"/><path fill="#0fa966" d="m268.198 184.346c-1.328-3.228-4.439-5.313-7.93-5.313-.003 0-.006 0-.009 0-3.494.004-6.606 2.096-7.928 5.33-.023.056-.045.112-.066.168l-17.796 46.727c-1.474 3.871.468 8.204 4.339 9.678s8.204-.469 9.678-4.339l2.592-6.807h18.24l2.561 6.785c1.134 3.003 3.987 4.854 7.019 4.854.879 0 1.775-.156 2.646-.485 3.875-1.462 5.832-5.79 4.369-9.665l-17.635-46.729c-.025-.068-.052-.136-.08-.204zm-11.406 30.444 3.449-9.055 3.417 9.055z"/><path fill="#0fa966" d="m204.088 194.033c3.247 0 6.376.955 9.051 2.762 3.433 2.319 8.095 1.416 10.414-2.016 2.319-3.433 1.416-8.095-2.016-10.414-5.164-3.489-11.198-5.333-17.448-5.333-17.202 0-31.197 13.995-31.197 31.197s13.995 31.197 31.197 31.197c16.46 0 27.957-12.829 27.957-31.197 0-4.142-3.358-7.5-7.5-7.5h-14.178c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h5.504c-1.689 4.885-5.336 8.697-11.783 8.697-8.931 0-16.197-7.266-16.197-16.197s7.265-16.196 16.196-16.196z"/><path fill="#0fa966" d="m317.346 226.427c-4.273 0-8.37-1.705-10.958-4.562-2.781-3.069-7.524-3.303-10.594-.521s-3.303 7.524-.521 10.594c5.465 6.031 13.51 9.489 22.073 9.489 10.752 0 19.792-6.919 21.494-16.453 1.292-7.236-1.913-16.659-14.784-21.407-5.542-2.044-10.72-4.264-12.591-5.08-.481-.475-.523-1.069-.459-1.516.163-1.136 1.134-2.052 2.665-2.513 5.834-1.754 11.395 2.572 11.594 2.729 3.17 2.619 7.866 2.197 10.517-.958 2.665-3.17 2.255-7.902-.916-10.567-4.312-3.624-14.542-8.877-25.521-5.567-7.137 2.15-12.189 7.799-13.186 14.744-.941 6.554 1.902 12.859 7.419 16.456.331.216.679.405 1.04.566.276.124 6.849 3.049 14.248 5.778 2.743 1.012 5.551 2.777 5.208 4.697-.295 1.651-2.637 4.091-6.728 4.091z"/></g></svg>
          <span>Датчик воздуха</span>
        </div>
        <div class="card">
          <svg id="Capa_1" width="50" height="50" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path fill="#0fa966" d="m361.5 0h-211c-17.921 0-32.5 14.579-32.5 32.5v197.373c0 11.287 4.606 22.31 12.638 30.241l33.858 33.435c7.904 7.805 16.642 14.47 26.004 19.926v46.866c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-39.388c15.702 6.585 32.704 10.047 50.222 10.047 17.711 0 34.913-3.549 50.778-10.291v101.291h-101v-26.659c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v94.159c0 12.406 10.094 22.5 22.5 22.5h86c12.406 0 22.5-10.094 22.5-22.5v-176.35c9.579-5.491 20.425-14.3 28.81-22.876 2.966-2.892 3.025-7.64.133-10.605-2.893-2.965-7.641-3.027-10.605-.133-21.555 22.844-52.344 36.606-84.115 36.465-30.4 0-59.055-11.764-80.687-33.125l-33.858-33.435c-5.196-5.132-8.177-12.264-8.177-19.567v-197.374c0-9.649 7.851-17.5 17.5-17.5h211c9.649 0 17.5 7.851 17.5 17.5v197.245c0 7.368-3.024 14.544-8.299 19.688l-5.917 5.771c-2.966 2.892-3.025 7.641-.133 10.605 2.891 2.964 7.64 3.023 10.605.133l5.917-5.771c8.151-7.949 12.826-19.039 12.826-30.426v-197.245c0-17.921-14.579-32.5-32.5-32.5zm-55 452h-30.5c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h30.5v22.5c0 4.136-3.364 7.5-7.5 7.5h-86c-4.136 0-7.5-3.364-7.5-7.5v-22.5h35.5c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-35.5v-15h101z"/><path fill="#0fa966" d="m156 188c-4.143 0-7.5 3.357-7.5 7.5v31c0 4.143 3.357 7.5 7.5 7.5h45c4.143 0 7.5-3.357 7.5-7.5v-31c0-4.143-3.357-7.5-7.5-7.5zm37.5 31h-30v-16h30z"/><path fill="#0fa966" d="m363.5 195.5c0-4.143-3.357-7.5-7.5-7.5h-45c-4.143 0-7.5 3.357-7.5 7.5v31c0 4.143 3.357 7.5 7.5 7.5h45c4.143 0 7.5-3.357 7.5-7.5zm-15 23.5h-30v-16h30z"/><path fill="#0fa966" d="m288.5 228.5v-35c0-6.893-5.607-12.5-12.5-12.5h-40c-6.893 0-12.5 5.607-12.5 12.5v35c0 6.893 5.607 12.5 12.5 12.5h40c6.893 0 12.5-5.607 12.5-12.5zm-15-2.5h-35v-30h35z"/><path fill="#0fa966" d="m256 256c-12.406 0-22.5 10.094-22.5 22.5s10.094 22.5 22.5 22.5 22.5-10.094 22.5-22.5-10.094-22.5-22.5-22.5zm0 30c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5z"/><path fill="#0fa966" d="m364 158.5v-52.75c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v45.25h-129.521c-6.491-4.374-12.953-17.668-12.218-30.171.55-7.921 3.762-14.957 12.702-18.245 5.733-1.994 14.539 2.693 23.863 7.657 17.998 9.582 42.648 22.704 68.741-1.213 11.215-10.28 16.321-28.394 13.009-46.145-1.271-6.812-3.681-12.855-7.02-17.884h30.444v25.75c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-33.249c0-4.143-3.357-7.5-7.5-7.5h-201c-4.143 0-7.5 3.357-7.5 7.5v121c0 4.143 3.357 7.5 7.5 7.5h201c4.143 0 7.5-3.357 7.5-7.5zm-68.225-113.5c7.586 2.709 13.183 10.594 15.056 20.635 2.312 12.388-1.143 25.685-8.399 32.337-18.271 16.749-34.438 8.141-51.556-.971-9.955-5.3-20.199-10.753-30.344-9.781 1.582-7.83 1.699-17.233-1.99-27.3-2.193-5.986-5.273-10.898-8.611-14.92zm-95.81 106h-36.965v-106h23.694c4.794 2.581 13.576 8.649 17.764 20.08 6.001 16.383-2.312 30.491-4.773 34.142-4.334 5.537-6.918 12.583-7.397 20.727-.635 10.784 2.422 22.154 7.677 31.051z"/><path fill="#0fa966" d="m311.5 126c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h20c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path fill="#0fa966" d="m265 82.5h5v5c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-5h5c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-5v-5c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v5h-5c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z"/></g></svg>
          <span>Тепловизор</span>
        </div>
        <div class="card">
          <svg version="1.1" id="Layer_1" width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve"><g><g><g><path fill="#0fa966" d="M391.502,210.725c-5.311-1.52-10.846,1.555-12.364,6.865c-1.519,5.31,1.555,10.846,6.864,12.364 C431.646,243.008,460,261.942,460,279.367c0,12.752-15.51,26.749-42.552,38.402c-29.752,12.82-71.958,22.2-118.891,26.425 l-40.963-0.555c-0.047,0-0.093-0.001-0.139-0.001c-5.46,0-9.922,4.389-9.996,9.865c-0.075,5.522,4.342,10.06,9.863,10.134 l41.479,0.562c0.046,0,0.091,0.001,0.136,0.001c0.297,0,0.593-0.013,0.888-0.039c49.196-4.386,93.779-14.339,125.538-28.024 C470.521,316.676,480,294.524,480,279.367C480,251.424,448.57,227.046,391.502,210.725z"/><path fill="#0fa966" d="M96.879,199.333c-5.522,0-10,4.477-10,10c0,5.523,4.478,10,10,10H138v41.333H96.879c-5.522,0-10,4.477-10,10 s4.478,10,10,10H148c5.523,0,10-4.477,10-10V148c0-5.523-4.477-10-10-10H96.879c-5.522,0-10,4.477-10,10s4.478,10,10,10H138 v41.333H96.879z"/><path fill="#0fa966" d="M188.879,280.667h61.334c5.522,0,10-4.477,10-10v-61.333c0-5.523-4.477-10-10-10h-51.334V158H240c5.523,0,10-4.477,10-10 s-4.477-10-10-10h-51.121c-5.523,0-10,4.477-10,10v122.667C178.879,276.19,183.356,280.667,188.879,280.667z M198.879,219.333 h41.334v41.333h-41.334V219.333z"/><path fill="#0fa966" d="M291.121,280.667h61.334c5.522,0,10-4.477,10-10V148c0-5.523-4.478-10-10-10h-61.334c-5.522,0-10,4.477-10,10v122.667 C281.121,276.19,285.599,280.667,291.121,280.667z M301.121,158h41.334v102.667h-41.334V158z"/><path fill="#0fa966" d="M182.857,305.537c-3.567-4.216-9.877-4.743-14.093-1.176c-4.217,3.567-4.743,9.876-1.177,14.093l22.366,26.44 c-47.196-3.599-89.941-12.249-121.37-24.65C37.708,308.06,20,293.162,20,279.367c0-16.018,23.736-33.28,63.493-46.176 c5.254-1.704,8.131-7.344,6.427-12.598c-1.703-5.253-7.345-8.13-12.597-6.427c-23.129,7.502-41.47,16.427-54.515,26.526 C7.674,252.412,0,265.423,0,279.367c0,23.104,21.178,43.671,61.242,59.48c32.564,12.849,76.227,21.869,124.226,25.758 l-19.944,22.104c-3.7,4.1-3.376,10.424,0.725,14.123c1.912,1.726,4.308,2.576,6.696,2.576c2.731,0,5.453-1.113,7.427-3.301 l36.387-40.325c1.658-1.837,2.576-4.224,2.576-6.699v-0.764c0-2.365-0.838-4.653-2.365-6.458L182.857,305.537z"/><path fill="#0fa966" d="M381.414,137.486h40.879c5.522,0,10-4.477,10-10V86.592c0-5.523-4.478-10-10-10h-40.879c-5.522,0-10,4.477-10,10v40.894 C371.414,133.009,375.892,137.486,381.414,137.486z M391.414,96.592h20.879v20.894h-20.879V96.592z"/></g></g></g></svg>
          <span>Панорамная камера</span>
        </div>
      </div>
    </div>
  `

  document.querySelectorAll('#battery-lvl')[0].style.width = currentDevice.battery + '%'

  setStyleCSS(/*css*/ `
    hero {
      justify-content: inherit;
      padding: 0;
      overflow-y: none;
    }
    .hero-text {
      padding: 15px 5%;
    }
    .control__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      width: 100%;
      height: 100%;
      background-color: #333;
      overflow-y: auto;
    }
    .control__monitor {
      --index: 1vw + 1vh;
      flex-grow: 1;

      position: relative;
      width: calc(var(--index) * 16 * 7);
      height: calc(var(--index) * 9 * 7);
      background: url('src/img/screen.png') no-repeat;
      background-size: cover;
      background-position: center;
      border: 3px solid var(--white);
    }
    .control__presets {
      flex-grow: 1;
      max-width: 400px;
      height: calc(var(--index) * 9 * 6.425);
    }
    .control__presets > span {
      display: block;
      font-size: 22px;
      font-weight: 500;
      padding: 25px 15px;
      color: var(--white);
    }
    .control__presets > span:first-child {
      padding: 0;
      text-align: center;
      margin-left: 15px;
      margin-right: 15px;
      margin-bottom: 150px;
    }
    .control__tooling {
      flex-grow: 1;
      min-width: 400px;
      height: calc(var(--index) * 9 * 6.425);
    }
    .control__tooling > span {
      display: block;
      font-size: 22px;
      font-weight: 500;
      color: var(--white);
    }
    .control__tooling > div {
      display: flex;
      align-items: center;
      height: 40px;
      background-color: #222222aa;
      border-radius: 15px;
      padding: 15px 15px;
      margin: 15px;
    }
    .control__tooling > div > svg {
      margin-right: 15px;
    }
    .control__tooling > div > span {
      font-size: 22px;
      font-weight: 500;
      color: var(--white);
    }
    .control__tooling > span:first-child {
      text-align: center;
      margin-bottom: 150px;
    }
    .row-options {
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 1fr 1fr 1fr;
      width: 100%;
      height: 100px;
      background-color: #333333CC;
    }
    .row-options > .option:not(:first-child) {
      border-left: 3px solid white;
    }
    .row-options > .option {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .row-options > .option > span {
      text-transform: uppercase;
      color: var(--white);
      font-size: 18px;
      font-weight: 600;
    }
    .row-options > .option > svg {
      cursor: pointer;
    }
    #battery {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 75px;
      height: 35px;
      border: 2px solid white;
      border-radius: 7.5px;
      overflow: ;
    }
    #battery > span {
      color: white;
      filter: drop-shadow(0 0 3px #000000aa);
      z-index: 2;
    }
    #battery::after {
      position: absolute;
      display: block;
      content: '';
      width: 8px;
      height: 12.5px;
      top: 50%;
      right: -8px;
      transform: translate(0, -50%);
      background-color: white;
      border-radius: 2px;
    }
    #battery-lvl {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 5px;
      z-index: 1;
    }
    #mini-map {
      position: absolute;
      width: 260px;
      height: 175px;
      right: 15px;
      bottom: 15px;
      background: url('src/img/mini-map.png') no-repeat;
      background-size: contain;
      background-position: center;
    }
    #statistic {
      position: absolute;
      left: 15px;
      bottom: 15px;
      padding: 15px 30px;
      margin-right: 300px;
      background-color: #333;
      border-radius: 15px;
    }
    #statistic > span {
      margin: 0 10px;
      font-size: 20px;
      font-weight: 600;
      color: var(--white);
    }
    #focus {
      position: absolute;
      width: 200px;
      height: 200px;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
    #focus::after {
      display: block;
      position: absolute;
      content: 'ФИКСИРОВАННЫЙ ФОКУС';
      width: 500px;
      left: 50%;
      bottom: -35px;
      transform: translate3d(-50%, 0, 0);
      text-align: center;
      font-size: 22px;
      font-weight: 600;
      color: var(--white);
    }
    #record_btn {
      cursor: pointer;
      position: absolute;
      width: 75px;
      height: 75px;
      right: 25px;
      top: 50%;
      transform: translate3d(0, -50%, 0);
      background-color: red;
      border-radius: 50%;
    }
    #record_btn:hover {
      background-color: #FF0055;
    }
    #record_btn::after {
      display: block;
      content: '';
      position: absolute;
      width: 82.5px;
      height: 82.5px;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      border-radius: 50%;
      border: 5px solid black;
    }
  `)
  checkboxUpdate()
}
