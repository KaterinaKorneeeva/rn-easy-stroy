export const DATA = [
  {
    id: '1',
    name: 'ЖК «Береговой» ',
    address: 'Новофилёвский пр., д. 3',
    сustomer: 'Дмитрий', 
    phone: '+79667890078',
    floorArea: '240',
    responsible: 'Петров Иван',
    img:
      'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg',
    text: 'ЖК «Береговой» 250 м² 1',
    date: new Date().toJSON(),
    booked: true,
    status: 1,
    description :  'Сделать быстро и качественно!',
    balance: '100000',
    pay: 'cash',
    dateStart: '2021-01-01',
    dateFinish: '2022-01-01'
    
  },
  {
    id: '2',
    name: 'Фитнес центр',
    address: 'г. Москва, ул. Красносельская, д. 5, стр. 9, кв. 675',
    balance: '150000',

    responsible: 'Иванов Иван',
    сustomer: 'Александр', 
    phone: '+79667890078',
    floorArea: '240',
    img:
      'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
    text: 'Фитнес центр «Силушка» 245 м ',
    date: new Date().toJSON(),
    booked: true,
    status: 1,
    
    pay: 'cash',
    dateStart: '2021-01-01',
    dateFinish: '2022-01-01',
    description :  'Предложение действует до 30 августа Оформить кредит можно в приложении, без справок и визитов в банк.'
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
    status: 2,
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
    status: 1,
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
    status: 1,
    balance: '4999654.44',
    dateStart: '2021-01-01',
    dateFinish: '2022-01-01'
  }
]


export const LIST_EXPENSES= [
  {
    id: '1',
    expenseName: '11Краска и все для покраски стен',
    sum: '2000',
    date:  new Date().toDateString().slice(4, 10),
    seller_id: '1',
  },
  {
    id: '2',
    expenseName: 'Плинтуса и дверные откосы',
    sum: '2000',
    date: new Date().toDateString().slice(4, 10),
    seller_id: '2',
  },
  {
    id: '3',
    expenseName: 'Краска и все для покраски стен',
    sum: '2000',
    date: new Date().toDateString().slice(4, 10),
    seller_id: '3',
  },
  {
    id: '4',
    expenseName: 'Плинтуса и дверные откосы',
    sum: '2000',
    date: new Date().toDateString().slice(4, 10),
    seller_id: '1',
  },
  {
    id: '5',
    expenseName: 'Плинтуса и дверные откосы Плинтуса и дверные откосы',
    sum: '2000',
    date: new Date().toDateString().slice(4, 10),
    seller_id: '2',
  }
]

export const LIST_SELLERS= [
  {
    id: '1',
    name: 'Леруа',
    phone: '',
    description: 'Магазин Леруа',
    logo: 'https://cdn1.flamp.ru/de2482f95921edbcdd2635ed18ba75b5.jpg',
    numberOrders: '10',
  },
  {
    id: '2',
    name: 'Икеа',
    phone: '',
    description: '',
    logo: 'https://static.tildacdn.com/tild3764-3135-4664-b561-393533383361/new_logo_ikea.jpg',
    numberOrders: '0',
  },
  {
    id: '3',
    name: 'OBI',
    phone: '',
    description: '',
    logo:  'https://static.tildacdn.com/tild3764-3135-4664-b561-393533383361/new_logo_ikea.jpg',
    numberOrders: '0',
  },
]

export const statusesList= [
  {
    id: 1,
    name: 'В ожидании',
  },
  {
    id: 2,
    name: 'В работе',
  },
  {
    id: 3,
    name: 'Сдан',
  },
]