let choice = {
  device: undefined,
  researchObject: undefined,
  workScenario: undefined
}

class Device {
  constructor() {
    this.name = ''
    this.status = ''
    this.battery = 100
    this.startUpTime = 0
  }

  printInfo() {
    console.log(
      'Устройство: ' + this.name,
      'Статус: ' + this.status,
      'Ур. батареи: ' + this.battery,
      'Время с момента запуска: ' + this.startUpTime
    )
  }
}
