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
        extraCharge: 0,
      },
      {
        title: 'Peach',
        value: 'peach',
        extraCharge: 0,
      },
      {
        title: 'Banana Cream',
        value: 'bananaCream',
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
        extraCharge: 0,
      },
      {
        title: '8 inch',
        value: 'eightInch',
        extraCharge: 15,
      },
    ],
  },
  {
    name: 'Filling',
    choices: [
      {
        title: 'No Bake Cheesecake',
        value: 'noBakeCheesecake',
        extraCharge: 0,
      },
      {
        title: 'Vanilla Mousse',
        value: 'vanillaMousse',
        extraCharge: 0,
      },
      {
        title: 'Chocolate Mousse',
        value: 'chocolateMousse',
        extraCharge: 0,
      },
      {
        title: 'Lemon Curd',
        value: 'lemonCurd',
        extraCharge: 0,
      },
      {
        title: 'Cream Cheese',
        value: 'creamCheese',
        extraCharge: 0,
      },
      {
        title: 'Fruit Compote (price varies)',
        value: 'fruitCompote',
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
        title: 'Fruit (price varies)',
        value: 'fruit',
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

const cookiesAdditialOptions = [
  {
    name: 'If you would like to mix & match flavors, please specify in Special Requests section',
    choices: [
      {
        title: 'Chocolate Chip',
        value: 'chocolateChip',
        extraCharge: 0,
      },
      {
        title: 'White Chocolate Nut',
        value: 'whiteChocolateNut',
        extraCharge: 0,
      },
      {
        title: 'Peanut Butter',
        value: 'peanutButter',
        extraCharge: 0,
      },
      {
        title: 'Snickerdoodle',
        value: 'snickerdoodle',
        extraCharge: 0,
      },
      {
        title: 'Sugar',
        value: 'sugar',
        extraCharge: 0,
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
        price: 24,
        category: 'pie',
        id: 0,
        options: [],
      },
      {
        title: 'Banana Cream Pie',
        price: 20,
        category: 'pie',
        id: 1,
        options: [],
      },
      {
        title: 'Sweet Potato Pie (seasonal)',
        price: 18,
        category: 'pie',
        id: 2,
        options: [],
      },
      {
        title: 'Peach Pie (seasonal)',
        price: 18,
        category: 'pie',
        id: 3,
        options: [],
      },
      {
        title: 'Chocolate Cream Pie',
        price: 18,
        category: 'pie',
        id: 4,
        options: [],
      },
      {
        title: 'Mini Pies (12ct)',
        price: 18,
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
        price: 70,
        id: 6,
        options: cakeAdditionalOptions,
      },
      {
        title: 'Chocolate Cake',
        price: 70,
        category: 'cake',
        id: 7,
        options: cakeAdditionalOptions,
      },
      {
        title: 'Lemon Cake',
        price: 70,
        category: 'cake',
        id: 8,
        options: cakeAdditionalOptions,
      },
      {
        title: 'Funfetti Cake',
        price: 70,
        category: 'cake',
        id: 9,
        options: cakeAdditionalOptions,
      },
      {
        title: 'Marble Cake',
        price: 70,
        category: 'cake',
        id: 10,
        options: cakeAdditionalOptions,
      },
      {
        title: 'Strawberry Cake',
        price: 70,
        category: 'cake',
        id: 11,
        options: cakeAdditionalOptions,
      },
      // {
      //   title: 'Red Velvet Cake',
      //   price: 70,
      //   category: 'cake',
      //   id: 12,
      //   options: cakeAdditionalOptions,
      // },
      // {
      //   title: 'Oreo Cake',
      //   price: 70,
      //   category: 'cake',
      //   id: 13,
      //   options: cakeAdditionalOptions,
      // },
      {
        title: 'Carrot Cake',
        price: 85,
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
        title: 'Lemon Bars (12ct)',
        price: 28,
        category: 'dessert',
        id: 23,
        options: [],
      },
      {
        title: 'Cheesecake Shooters (12ct)',
        price: 28,
        category: 'dessert',
        id: 24,
        options: [],
      },
      {
        title: 'Chocolate Covered Pretzels (12ct)',
        price: 25,
        category: 'dessert',
        id: 25,
        options: [],
      },
      {
        title: 'Fruit Tarts (12ct)',
        price: 35,
        category: 'dessert',
        id: 26,
        options: [],
      },
      {
        title: 'Chocolate Covered Strawberries (12ct)',
        price: 38,
        category: 'dessert',
        id: 27,
        options: [],
      },
      {
        title: 'Champagne Chocolate Covered Strawberries (12ct)',
        price: 48,
        category: 'dessert',
        id: 28,
        options: [],
      },
      {
        title: 'Cake Pops (12ct)',
        price: 35,
        category: 'dessert',
        id: 29,
        options: [],
      },
      {
        title: 'Cookies (12ct)',
        price: 20,
        category: 'dessert',
        id: 30,
        options: cookiesAdditialOptions,
      },
      {
        title: 'Cupcakes (12ct)',
        price: 40,
        category: 'dessert',
        id: 31,
        options: [],
      },
      {
        title: 'Mini Cupcakes (12ct)',
        price: 22,
        category: 'dessert',
        id: 32,
        options: [],
      },
      {
        title: 'Rice Crispy Treats (12ct)',
        price: 32,
        category: 'dessert',
        id: 33,
        options: [],
      },
      {
        title: 'Cinnamon Rolls (6ct)',
        price: 32,
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
