export const DATA = [
  {
    id: '1',
    name: 'ЖК «Береговой» ',
    address: 'Новофилёвский пр., д. 3',
    сustomer: 'Дмитрий', 
    number: '+79667890078',
    responsible: 'Петров Иван',
    img:
      'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg',
    text: 'ЖК «Береговой» 250 м² 1',
    date: new Date().toJSON(),
    booked: true,
    status: 'in work',
    description :  'Сделать быстро и качественно!',
    balance: '100000',
    pay: 'cash',
    dateStart: '2021-01-01',
    dateFinish: '2022-01-01'
  },
  {
    id: '2',
    name: 'Фитнес центр',
    address: 'столярный переулок',
    responsible: 'Иванов Иван',
    img:
      'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
    text: 'Фитнес центр «Силушка» 245 м ',
    date: new Date().toJSON(),
    booked: true,
    status: 'completed',
    balance: '0',
    pay: 'cash',
    dateStart: '2021-01-01',
    dateFinish: '2022-01-01'
  },
  {
    id: '3',
    name: 'Детский сад',
    address: 'симферопольский бульвар',
    responsible: 'Петров Иван',
    img:
      'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg',
    text: 'Детский сад  3',
    date: new Date().toJSON(),
    booked: false,
    status: 'completed',
    balance: '0',
    dateStart: '2021-01-01',
    dateFinish: '2022-01-01'
  },
  {
    id: '4',
    name: 'Детский сад',
    address: 'симферопольский бульвар',
    responsible: 'Петров Дмитрий',
    img:
      'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
    text: 'Детский сад  4',
    date: new Date().toJSON(),
    booked: false,
    status: 'awaiting',
    balance: '0',
    dateStart: '2021-01-01',
    dateFinish: '2022-01-01'
  },
  {
    id: '5',
    name: 'Бойцовский клуб 5',
    address: 'симферопольский бульвар',
    responsible: 'Константин',
    img:
      'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg',
    text: 'Бойцовский клуб 5',
    date: new Date().toJSON(),
    booked: false,
    status: 'awaiting',
    balance: '4999654.44',
    dateStart: '2021-01-01',
    dateFinish: '2022-01-01'
  }
]


export const listExpenses= [
  {
    id: '1',
    name: 'Краска и все для покраски стен',
    sum: '2000',
    date: '2021-01-01',
  },
  {
    id: '2',
    name: 'Плинтуса и дверные откосы',
    sum: '2000',
    date: '2021-01-01',
  },
  {
    id: '3',
    name: 'Краска и все для покраски стен',
    sum: '2000',
    date: '2021-01-01',
  },
  {
    id: '4',
    name: 'Плинтуса и дверные откосы',
    sum: '2000',
    date: '2021-01-01',
  },
  {
    id: '5',
    name: 'Плинтуса и дверные откосы',
    sum: '2000',
    date: '2021-01-01',
  }
]

export const sellersList= [
  {
    id: '1',
    name: 'Леруа',
  },
  {
    id: '2',
    name: 'Икеа',
  },
  {
    id: '3',
    name: 'OBI',
  },
]

export const statusesList= [
  {
    id: '1',
    name: 'В ожидании',
  },
  {
    id: '2',
    name: 'В работе',
  },
  {
    id: '3',
    name: 'Сдан',
  },
]