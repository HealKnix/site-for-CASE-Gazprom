let choiceTarget = {
  device: undefined,
  researchObject: undefined,
  workScenario: undefined,
  method: undefined
}

let choice = new Proxy(choiceTarget, {
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value
      target['method']()
    }
  }
})

class Device {
  constructor(parameters) {
    this.name = parameters.name
    this.researchObject = parameters.researchObject
    this.status = parameters.status
    this.battery = parameters.battery
    this.connectionQuality = parameters.connectionQuality
    this.startUpTime = (parameters.startUpTime / 60).toFixed(1) + ' мин'

    if (this.status === 'Подзарядка') {
      this.connectionQuality = 3
      this.startUpTime = '-'
    } else if (this.status === 'Инициализация') {
      this.startUpTime = 'Запуск'
    }
  }

  printInfo() {
    console.log(this)
  }

  control() {
    console.log('Идёт контроль ' + this.name)
  }
}

const droneList = [
  new Device({
    name: 'Дрон-1',
    researchObject: 'КП-1',
    status: 'Разведка',
    connectionQuality: 2,
    battery: 60,
    startUpTime: 611
  }),
  new Device({
    name: 'Дрон-2',
    researchObject: 'КП-2',
    status: 'Инициализация',
    connectionQuality: 1,
    battery: 100
  }),
  new Device({
    name: 'АПУ-1',
    researchObject: 'КП-3',
    status: 'Оценка воздуха',
    connectionQuality: 1,
    battery: 30,
    startUpTime: 1200
  }),
  new Device({
    name: 'АПУ-2',
    researchObject: 'КП-4',
    status: 'Готовность',
    connectionQuality: 1,
    battery: 100,
    startUpTime: 0
  }),
  new Device({
    name: 'АПУ-3',
    researchObject: 'КП-4',
    status: 'Подзарядка',
    battery: 30
  }),
  new Device({
    name: 'АПУ-4',
    researchObject: 'КП-1',
    status: 'Ожидание',
    connectionQuality: 1,
    battery: 30,
    startUpTime: 900
  })
]
