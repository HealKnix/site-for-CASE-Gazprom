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
        <span>Макс. время передвижения - 45 миню</span>
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
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45" height="45" viewBox="0 0 29 48">
            <image id="Слой_12" data-name="Слой 12" width="29" height="48" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAwCAYAAADtoXHnAAAFbElEQVRYhbWYe6zXYxzHX+f8Th1d5USnOsoJ6dBFilzmOmPkNobJCsOaya2xZTP8xR+Yy2YYM+a+IbHcRsbIpShUkpSIUNKRndLR6Wef7fW1Z9/zu5xyfLbvft/n932ez/tzfz7PU9PvlRlUoN7A8cCpwIFAX2AH8APwLvAqsLYSg1JUVwXwCOAs4CRgRPJtNLC7AswB1ncHaEHtbgTGAT2BItAG9AD6AycDhwJDgIeAX/8LaA1wMHC1TBHsY+ALoBE4ARgK7AlcB/wF3KnmuwTaAFwGHOV4JXCvPtwI9NK8MecMYIAumA98BHTsCmiY61jNuAF4GngS+DOZswbYqp/HA2P1+yJgi+4ZBOyRCFHQ95tKgQ5W26DFwLM5wIxCq9eAkUb1ATIO95xpTDQkoIH1C/BhHjQW9UnGP5sepSj8t0TpRxhsAVgr6CVl1jVXSpmgdmB7mW81fkt9WOv4faAF2Bv4228h1Arg7VKgxRyTQgXgzJzp/KAXNX8fLZJZoDWCsZqmNTmmXaU/fEpSNVASSfcxWCJtvvT/Ym5uNo65+xlgHTlN11UDLWraMNNFwBURfcAsYHUiUF7AC4GrXJcJUqPAL3UFdId1+DBzeJTRuqqMpsG8ycqVd03wGd4V82bMisl7bfKeUkEhHwWWWRyy0lhrni7fGdB23zuSNMhrko0X+5SkroLmAapFdK1a9sv5dFNUt50B7QplpjwaON0oTovD18AH3Qla1PTBcxpweZl5c7oTtCYpg5/r08akmgXW98CC7jZvQY2fd8NvSIpDwQ3kx+4GzWh9pb7p/wKNNma4zVuq6W8hTHeDZgBRMi9NQLETCe3ndjdoVq1G2UflKZq5NeW6wV2hzISh2QtubfkeKcrgwjxoh/1Q1Y6uBLUn696KIqB504r0e8wr1SMNsXqgHypRXVL8e7uVbXa81acT1SZ/1Lp9RUM1sAJQfmfJeIyx/+1bzSQpaBwfbgaOUYM2a2VGHclv9r7S3jioGbgGOAeo7wpodG0XA5NdEPl0B/Cc39uTACsk2i4Fbtd/NZ7sZgKTKoEW6qdMCiYXANN1fATSw8A9lq3oEk7zCDFIQXdoieiJvzIqR9uoDzZyP7PbLwnabD9zuMxeB25S24m+h9mGuaavmow3aFb4bPM40stCv9ruoaR5g8G+jqPvecTKEd3cDcB5Hg1bZbROn04AbtMKeID6xG8j/F4oBzox0SIk/tT3aZq0hwF1C3C+bpjt5tzsfyMVeG7S7w7THZ2oziAa4L63TI1CsyPNu/Db3cBTSd5t1oTHGe0TjORFrm+QZ6P+LuY17eV7q4Gz3TzNDlLfeTpLE32JERuH4b1kjkHY5nu9vDuV1TRPC46LOcl6Wm3y68rlYgqSLyT/Lt6s8/u7B2Zb0EbnRFCcrX/qFeAQD8G7ebuSHScHJhVpq1p3Aq5z0SY33jH+hpnf8wog8m6Gnd0ix5Odi/PmK8Akcx3d1cmfGWgc6U4RrMVbkzjuPyPATC0w3RuU/vaz6NfHLIUtlsABWu4bc70T1Sn9ClMnQKZaTZaas+GjEz2xNckgurqFwONq2cf0Guf85X4v6dOoSG0Gy1gjsUnfRW5+C8wzHX5SuPla4X7bzIiBKcD1+n2bZXR2ua2tTmnmap5ZAk5V4gcEn6cps/lb/N5ocbjSgIsyugB42Q27JIWmuIusVdLRAre4vw6VWauSR8TvD5wLXKuW2RVemPVWrVHStORa0FXW0g12cwO9GzxIf61P7ogaBGpK1r8D3Ae8We3mLN+uhCnvii7c3IzruojWyMtyFGvidP6E6VOVSnWDsYs8aPBEKkU+Roqklx7ZeTWECw3fcAeqTsA/yohh5gdtpFMAAAAASUVORK5CYII="/>
          </svg>
          <span>Датчик температуры</span>
        </div>
        <div class="card">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45" height="45" viewBox="0 0 41 42">
            <image id="Слой_13" data-name="Слой 13" width="41" height="42" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAqCAYAAAAu9HJYAAAE/ElEQVRYhcWZe4hUdRTHP+PO6qq7pW6ZZahBapa9zEzTXhallFgRlEUQFBQVFvVPUNR/FUEQFUQRSRIVZWgPekFBmVmLpWQPyx5srT3UsoeP2pdx6nPjMjt37ozO5IELd2bOvb/v75zvefzOFNpeuI4aZRQwFTjS+27gW+BT4Evgz1pfmCfFGvUnATOA6WVAxm/vAR3A7/sCZBMwE7gJOAsYVvLsScAFQCfwMPAU8H29QDYNWTSjGr05wL3A6cBQYBCwS9f2+nkw0K6lR2nVXfUAWY0ljwZudHEEtRJ4GdikVY8DFgDjgRHAhXL0MWBno0E26cYFft7hwk8AH6cAHAq8CdwAnAYcBFwFvA181GiQ47VgM9ADvKrbO0v0urzagMOBscBE4Fgt2lthjTa90W/A/VULyIKpZqyffwGeFkyWrALeAi7VC1Pk5+YS/VZgAjDZzYxwI6H3BbDBjNFfDch2F8Eg2Aj0VXgmXvyV9wFytFZKS3x3CbDINDbEwMN3xzpvAI+66e2VQMYufgB+BsaZUrZW0E9vLkuCq3cAFwEHltEJWrUA5xuwDwFL8jjZIQcjet+tAuQ4OZlscrPBFjISuEIrjvS7rWaKTi0a9DpRoEGFa8NQeSATHj4fZs/RDTkHONX7CID1eiLkDOCaFMDY9BLgfTfTLE/PlNOTvBZXkyf7cgAm3JujpQ7x++DvOi0abj5bEAj+buDFknd16b3Y4K0G2OyiwXEEcDCw26tUdpfhWqIbKWSaPEpABH+XGkjouqneR5V63OAoJ9ELvALMA06JoAqQV8uTCRkAsyTRjcgcYlkM+UkQS1N8HG3Oxehdm1OJuiwEJ4Q1i3Y0EyXr3kok7vuBZcC2Eqs3eR/g/shZp9vn/0l3RQPjN13SlyTQEimUsXLi/uDPFjkYwfBOyoKJrDVIZhrN3+WAbNXygxOQy6yvYzI4mUeBKJdb5F9Phs7XwANmiW+qSGWTzQYtCch+y9CGnAf3Vn70ypPJpqCpemtnXgpqs6421xhUtUjivaHmxcuBcw3IoNJzlUBGarrZVDAop2bXA+hQ12zXw73W7gezQBY0+3nW0P9beoyV+4A1WSB3W84+saEtZER9PSTJEt2W4Qiy1cAK16/Yqm00561MBVgjQfYY9Z+bb/+jV16rttprn0oCsqVCBNczqhPa9OreqqRoPppvl9zTwCgueG23e++Qc7nH3qKN5XzLUF8D82G6jG4zsb8GPJLqljJBNpu0C3swdtkTiTWGmzWisTnA88wHWQYqqrDJnrK7gVGcdEIjbQtjvf09nwfQWxx4lQXZYZfSnNHt7AkYKhzIhjk7ut5BQotd+yrnSAP6zKIv7a4l2vZSdjhkCE7eBiyUbgvt1gdMPAbVGcB+wFyPEu0V9CIFrQGe4d82L+QY4LByyvUGGafFu4DbgYu1UCWJ6vKZvw/3mNFwkNOdHR1v99Sao9+dOvIWso4w9QaZJv0YD/yVZJinVMwqpceOhoDsspNBfh2Voz8lpbMjq3OvN8j1DgRw0LXYw1e6SCRFYzZwmbyNDPNhVuWpd4VZ51TiZPk1VxArzIPbHFTNMuVM87lfgScNpIaDjEBYbrNype+fZfmbZ3Mxwt+TFNXjJl7POm02olbHhOwe3RrAokZH2YsjajndlxzxZf5b0aiGImrwnY5cYt4e+S+ZYIREJMdvz5bMjAYK8DePujaIC4ElhQAAAABJRU5ErkJggg=="/>
          </svg>
          <span>Датчик ветра</span>
        </div>
        <div class="card">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45" height="45" viewBox="0 0 37 54">
            <image id="Слой_14" data-name="Слой 14" width="37" height="54" xlink:href="data:img/png;base64,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"/>
          </svg>
          <span>Датчик воздуха</span>
        </div>
        <div class="card">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45" height="45" viewBox="0 0 25 56">
            <image id="thermal-imaging" width="25" height="56" xlink:href="data:img/png;base64,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"/>
          </svg>
          <span>Тепловизор</span>
        </div>
        <div class="card">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45" height="45" viewBox="0 0 42 42">
            <image id="Слой_15" data-name="Слой 15" width="42" height="42" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAFQklEQVRYhe2YaWxVRRTHf++1tcVSNEFFKmpAG0UNikm1xqVog7gQMO5LXPiguCVqYgQ0UYmJCnH5gFsQI+6iRq2iMTRN1JAAccMtJnWpgrhjqUgp1VJzzP+SYTJz7319NukH/8nNu+/cWf4zc86Zc06h7rVr8FABzAMuB0YAA0AB+AN4G3gEeN/vBIwCrgMuBEarH+rbBzwL3AZsdfrsApyruRqALUAbsAj4wh08RLQJWBUgkmA7cAXwmCPbDXgZOCmln2E2sFjvtcAy4PRAux7gUuClRFAMNBqdMVlRu3qCI7shB0nD3s77wxGShl2Bp4HGNKKrgQ8yJqwE5jtjzMhBssPZoYnAeRntq4Edx10ZaLARaAFOAUbqqAvasYucdg0ajMAp3AF0Ogvple79Itlp0s8E3cCdwDHAGY68RbvbEyKKOi7zZJ/JUAr6XyOivVqMi8cdoiHs5cm+BBYCUzyio6TLUaIzRKrKkR3ukERe4E9vZxKYoXUB/cC3wIPAd873gUAfAmNtT9qGiB4MvBgh4E70hgYK6fmJ3v9LgIt1/GkoxL6FJpmYQdKwTZafF2OAJ4H6EvpkEl2rY02D6efNJc5lrmnmYImGjt6MoBk4H6hzrP4o168Bx6p/f2CMF2Thpuv7OfIxER4D3m8uomhX13qySZIlelQn19Eb6H8jsB7Y1yPqe4cEFZHvxWS+GNHxwNGe1Z/lKfsW3duFgArN0slMCExs2ODJzS5uChjh7/IsQaKm8O8C4yKLSPAh8JeIbvB2bn6kT5d+W4G75CNR8LMg0P71JIgJGVNjDpK2ylv0PiB3loWNImhYp7s+Db8BDyTfQ0TXZQxgE14GfO7IFmeQtV25Us4/wVxgSaR9p8K/jkQQCvNQwDDLu+u75LBbI4sxgzA9PkeuqCB/+xHwFPBxhFSz9P8wucUVWvSvbqMY0WGH0NH/T7QcDCXRevniihxtMzFURKcpS1gtX1g3HIlOBV5x8qNTvcxgUPiviU5XXjTCk28bTkQtp3pG6YOLVqUmZSEWlIRQo4A6FKtOUY7lk0QBTpv6detq/FoXwVcKPDKRRdQCjTOVkTYorFuhAkRynGbV9wB7RMaYlDK+3T7fA+9poau8SsoOhG4mU4ezgWuBIyIWe7KT/1Sq/HJgnp3JwDfAW1r4Tlmsr6Mz5VZsdcenuJUa5/1vhWixoLgUWPx6tQL0h4CxSV/36O8G5mQMamTagXc8+RKRXxTos0bfJ+ipV15fn7IRputXSeVs8z5NiN6eQvInhXRtOpZYFGSx40gFxC4mK1xzQ7oq5U9NyquOBA4NjDleNtFoOnqIovVqr9EahWfPKwbNCyuY3ee1naNKSAwVUrUL9Pg7/URRFRGXZI9S4eNU4SiFpOF+73Q6tdg09Kv2OluEV3ptmysDRYH1geMrFQtllJa0vSoXlBemWo9qoxJUFwMlxoOkF01lkm2X3pZCslbZqK86m4zoc8CP3oepsuzlqhvtXibpLFgB7l6V3BcEyphLE4c/XdUNP5hI8APwiZ6VKkF2Kxvty0mmoJvNPMM+OrEmqcfklLj1Tcup3JupRVY+NtLBRa+IbtavubBN+r9V/rbKqW/uKXdUK1neE1oqA+tzHX67VjZPGWgowEhQoydWSyoXFrDcKtX7F/4V+jNwvVLXudLTzUNExkeHTnSaCnLL3e950uX9FYQ066YYJx0rJxcydbHagJWCTN+tKGyRUzTAHkxeb8ZghA+QPpu+mcwM0eJVUyczHNNTq02ZPpvemg5bEcMiJItDzdNEy4w7AfgHTeshvnzdbdUAAAAASUVORK5CYII="/>
          </svg>
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
}
