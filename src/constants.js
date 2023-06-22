const popularItems = [
  'Apple Pie',
  'Banana Cream Pie',
  'Vanilla Cake',
  'Chocolate Cake',
  'Lemon Cake',
  'Funfetti Cake',
  'Lemon Bars',
  'Cheesecake Shooters',
  'Chocolate Covered Pretzels',
  'Fruit Tarts',
];

const popularOptions = ['No Bake Cheesecake'];

const miniPiesAdditionalOptions = [
  {
    name: 'Flavor',
    choices: [
      {
        title: 'Apple',
        value: 'apple',
        selected: false, 
        extraCharge: 0,
      },
      {
        title: 'Peach',
        value: 'peach',
        selected: false,
        extraCharge: 0,
      },
      {
        title: 'Banana Cream',
        value: 'bananaCream',
        selected: false,
        extraCharge: 0,
      },
    ],
  },
];

const cakeAdditionalOptions = [
  {
    name: 'Size',
    choices: [
      {
        title: '6 inch',
        value: 'sixInch',
        selected: false, //Why was this true before??? Does it matter?
        extraCharge: 0,
      },
      {
        title: '8 inch',
        value: 'eightInch',
        selected: false,
        extraCharge: 10,
      },
    ],
  },
  {
    name: 'Filling',
    choices: [
      {
        title: 'No Bake Cheesecake',
        value: 'noBakeCheesecake',
        selected: false,
        extraCharge: 0,
      },
      {
        title: 'Vanilla Mousse',
        value: 'vanillaMousse',
        selected: false,
        extraCharge: 0,
      },
      {
        title: 'Chocolate Mousse',
        value: 'chocolateMousse',
        selected: false,
        extraCharge: 0,
      },
      {
        title: 'Lemon Curd',
        value: 'lemonCurd',
        selected: false,
        extraCharge: 0,
      },
      {
        title: 'Cream Cheese',
        value: 'creamCheese',
        selected: false,
        extraCharge: 0,
      },
      {
        title: 'Fruit Compote (price varies)',
        value: 'fruitCompote',
        selected: false,
        extraCharge: 0,
      },
    ],
  },
];

const cheeseCakeAdditionalOptions = [
  {
    name: 'Topping',
    choices: [
      {
        title: 'Fruit',
        value: 'fruit',
        selected: false, //Why was this true before??? Does it matter?
        extraCharge: 0,
      },
      {
        title: 'Ganache',
        value: 'ganache',
        selected: false,
        extraCharge: 12,
      },
    ],
  },
];

// Menu has categories... categories have items ... items have options
const menu = [
  {
    title: 'Pies',
    value: 'pie',
    items: [
      {
        title: 'Apple Pie',
        price: 20,
        category: 'pie',
        id: 0,
        options: [],
      },
      {
        title: 'Banana Cream Pie',
        price: 18,
        category: 'pie',
        id: 1,
        options: [],
      },
      {
        title: 'Sweet Potato Pie (seasonal)',
        price: 16,
        category: 'pie',
        id: 2,
        options: [],
      },
      {
        title: 'Peach Pie (seasonal)',
        price: 1000,
        category: 'pie',
        id: 3,
        options: [],
      },
      {
        title: 'Chocolate Cream Pie',
        price: 1000,
        category: 'pie',
        id: 4,
        options: [],
      },
      {
        title: 'Mini Pies (12ct)',
        price: 15,
        category: 'pie',
        id: 5,
        options: miniPiesAdditionalOptions,
      },
    ],
  },
  {
    title: 'Naked Cakes (6" & 8")',
    value: 'cake',
    items: [
      {
        title: 'Vanilla Cake',
        price: 65,
        id: 6,
        options: cakeAdditionalOptions,
      },
      {
        title: 'Chocolate Cake',
        price: 65,
        category: 'cake',
        id: 7,
        options: cakeAdditionalOptions,
      },
      {
        title: 'Lemon Cake',
        price: 65,
        category: 'cake',
        id: 8,
        options: cakeAdditionalOptions,
      },
      {
        title: 'Funfetti Cake',
        price: 65,
        category: 'cake',
        id: 9,
        options: cakeAdditionalOptions,
      },
      {
        title: 'Marble Cake',
        price: 65,
        category: 'cake',
        id: 10,
        options: cakeAdditionalOptions,
      },
      {
        title: 'Strawberry Cake',
        price: 65,
        category: 'cake',
        id: 11,
        options: cakeAdditionalOptions,
      },
      // {
      //   title: 'Red Velvet Cake',
      //   price: 65,
      //   category: 'cake',
      //   id: 12,
      //   options: cakeAdditionalOptions,
      // },
      // {
      //   title: 'Oreo Cake',
      //   price: 65,
      //   category: 'cake',
      //   id: 13,
      //   options: cakeAdditionalOptions,
      // },
      {
        title: 'Carrot Cake',
        price: 65,
        category: 'cake',
        id: 14,
        options: cakeAdditionalOptions,
      },
    ],
  },
  {
    title: 'Baked Goods',
    value: 'bakedGoods',
    items: [
      {
        title: 'Lemon Loaf Cake',
        price: 32,
        category: 'bakedGoods',
        id: 15,
        options: [],
      },
      {
        title: 'Mini Lemon Loaf Cake',
        price: 6,
        category: 'bakedGoods',
        id: 16,
        options: [],
      },
      {
        title: 'Vanilla Loaf Cake',
        price: 32,
        category: 'bakedGoods',
        id: 17,
        options: [],
      },
      {
        title: 'Mini Vanilla Loaf Cake',
        price: 6,
        category: 'bakedGoods',
        id: 18,
        options: [],
      },
      {
        title: 'Banana Nut Loaf Cake Bread',
        price: 28,
        category: 'bakedGoods',
        id: 19,
        options: [],
      },
      {
        title: 'Mini Banana Nut Loaf Cake Bread',
        price: 6,
        category: 'bakedGoods',
        id: 20,
        options: [],
      },
      {
        title: 'Coffee Cake',
        price: 35,
        category: 'bakedGoods',
        id: 21,
        options: [],
      },
      {
        title: 'Cheesecake',
        price: 35,
        category: 'bakedGoods',
        id: 22,
        options: cheeseCakeAdditionalOptions,
      },
    ],
  },
  {
    title: 'Dessert Table',
    value: 'dessert',
    items: [
      {
        title: 'Lemon Bars',
        price: 1000,
        category: 'dessert',
        id: 23,
        options: [],
      },
      {
        title: 'Cheesecake Shooters',
        price: 1000,
        category: 'dessert',
        id: 24,
        options: [],
      },
      {
        title: 'Chocolate Covered Pretzels',
        price: 1000,
        category: 'dessert',
        id: 25,
        options: [],
      },
      {
        title: 'Fruit Tarts',
        price: 1000,
        category: 'dessert',
        id: 26,
        options: [],
      },
      {
        title: 'Chocolate Covered Strawberries',
        price: 1000,
        category: 'dessert',
        id: 27,
        options: [],
      },
      {
        title: 'Champagne Chocolate Covered Strawberries',
        price: 1000,
        category: 'dessert',
        id: 28,
        options: [],
      },
      {
        title: 'Cake Pops',
        price: 1000,
        category: 'dessert',
        id: 29,
        options: [],
      },
      {
        title: 'Assorted Cookies',
        price: 1000,
        category: 'dessert',
        id: 30,
        options: [],
      },
      {
        title: 'Cupcakes',
        price: 1000,
        category: 'dessert',
        id: 31,
        options: [],
      },
      {
        title: 'Mini Cupcakes',
        price: 1000,
        category: 'dessert',
        id: 32,
        options: [],
      },
      {
        title: 'Rice Crispy Treats',
        price: 1000,
        category: 'dessert',
        id: 33,
        options: [],
      },

      {
        title: 'Cinnamon Rolls',
        price: 1000,
        category: 'dessert',
        id: 34,
        options: [],
      },
    ],
  },
];
const pickupTimes = [
  {
    value: '1100',
    time: '11:00am',
  },
  {
    value: '1130',
    time: '11:30am',
  },
  {
    value: '1200',
    time: '12:00pm',
  },
  {
    value: '1230',
    time: '12:30pm',
  },
  {
    value: '100',
    time: '1:00pm',
  },
  {
    value: '130',
    time: '1:30pm',
  },
  {
    value: '200',
    time: '2:00pm',
  },
  {
    value: '230',
    time: '2:30pm',
  },
  {
    value: '300',
    time: '3:00pm',
  },
  {
    value: '330',
    time: '3:30pm',
  },
  {
    value: '400',
    time: '4:00pm',
  },
  {
    value: '430',
    time: '4:30pm',
  },
  {
    value: '500',
    time: '5:00pm',
  },
  {
    value: '530',
    time: '5:30pm',
  },
  {
    value: '600',
    time: '6:00pm',
  },
  {
    value: '630',
    time: '6:30pm',
  },
  {
    value: '700',
    time: '7:00pm',
  },
];

const paymentMethods = [
  {
    value: 'zelle',
    method: 'Zelle',
  },
  {
    value: 'venmo',
    method: 'Venmo',
  },
  {
    value: 'cashapp',
    method: 'CashApp',
  },
  {
    value: 'cash',
    method: 'Cash',
  },
];

// How I formated data

const selectedOptionsStateFormat = [
  {
    itemId: 0,
    optionGroupName: '',
    choiceTitle: '',
    choiceValue: '',
  },
];

const cartStateFormat = [
  {
    item: '', //selected item from state
    options: '', // selected options from state
    qty: 0, //??
  },
  // ...
];

const cartIdFormat = [
  '6-Size-sixInch-Filling-vanilla',
  '9-Size-eighInch-Filling-chocolate',
];

export { pickupTimes, paymentMethods, menu, popularItems, popularOptions };
