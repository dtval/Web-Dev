export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  url: string;
  img: string;
  link: string;
  category: string;
  likes: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Apple iPhone 11 128Gb Slim Box",
    price: 292500,
    description: "Функциональный и стильный смартфон Apple iPhone 11 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/h2e/31489167622174/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
    link: "https://t.me/webdev2023labs/3",
    category: "Телефон",
    likes: 0
  },
  {
    id: 2,
    name: "Apple iPhone 13 128Gb",
    price: 372770,
    description: "Функциональный и стильный смартфон Apple iPhone 13 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h10/46392662491166/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg",
    link: "https://t.me/webdev2023labs/4",
    category: "Телефон",
    likes: 0
  },
  {
    id: 3,
    name: "Apple iPhone 14 Pro Max 256Gb",
    price: 692880,
    description: "Функциональный и стильный смартфон Apple iPhone 14 Pro Max в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h61/62948780736542/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
    link: "https://t.me/webdev2023labs/5",
    category: "Телефон",
    likes: 0
  },
  {
    id: 4,
    name: "Apple iPhone 14 Pro 256Gb ",
    price: 624700,
    description: "Функциональный и стильный смартфон Apple iPhone 14 Pro в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h3f/62948396695582/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg",
    link: "https://t.me/webdev2023labs/6",
    category: "Телефон",
    likes: 0
  },
  {
    id: 5,
    name: "Samsung Galaxy Z Fold4 12 ГБ/256 ГБ",
    price: 1100000,
    description: "Элегантное сочетание уникального форм-фактора и натуральных классических оттенков притягивает внимание каждый раз, когда вы его открываете.",
    rating: 4,
    url: "https://kaspi.kz/shop/p/samsung-galaxy-z-fold4-12-gb-256-gb-chernyi-podarok-106036376/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/h09/61658903543838/samsung-galaxy-z-fold4-12-gb-256-gb-chernyi-smart-chasy-samsung-galaxy-watch-4-classic-106036376-1.jpg",
    link: "https://t.me/webdev2023labs/7",
    category: "Телефон",
    likes: 0
  },
  {
    id: 6,
    name: "Samsung Galaxy S23 Ultra 5G 12 ГБ/1024 ГБ",
    price: 899890,
    description: "Смартфон Samsung Galaxy S23 Ultra 5G 12 ГБ/1024 ГБ зеленый + подарок.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-5g-12-gb-1024-gb-zelenyi-podarok-108714435/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbb/h76/68538929545246/samsung-galaxy-s23-ultra-5g-12-gb-512-gb-zelenyi-108714435-1.jpg",
    link: "https://t.me/webdev2023labs/8",
    category: "Телефон",
    likes: 0
  },
  {
    id: 7,
    name: "Samsung Galaxy A73 5G 6 ГБ/128 ГБ",
    price: 209680,
    description: "Смартфон Samsung Galaxy A73 5G 6 ГБ/128 ГБ зеленый.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a73-5g-6-gb-128-gb-zelenyi-104546042/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0c/h2c/51531118018590/samsung-galaxy-a73-5g-6-gb-128-gb-zelenyi-104546042-1.jpg",
    link: "https://t.me/webdev2023labs/9",
    category: "Телефон",
    likes: 0
  },
  {
    id: 8,
    name: "Samsung Galaxy A04e 3 ГБ/32 ГБ",
    price: 54489,
    description: "Смартфон Samsung Galaxy A04e 3 ГБ/32 ГБ бронзовый.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a04e-3-gb-32-gb-bronzovyi-108335789/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h5c/67600601186334/samsung-galaxy-a04e-4-gb-64-gb-bronzovyi-108335789-1.jpg",
    link: "https://t.me/webdev2023labs/10",
    category: "Телефон",
    likes: 0
  },
  {
    id: 9,
    name: "Apple AirPods 3",
    price: 96260,
    description: "Наушники Apple AirPods 3 белый",
    rating: 5,
    url: "https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/h7b/46719105990686/apple-airpods-3-belyj-102667744-1.jpg",
    link: "https://t.me/webdev2023labs/11",
    category: "Наушники",
    likes: 0
  },
  {
    id: 10,
    name: "Samsung Galaxy Buds2 Pro",
    price: 69548,
    description: "Наушники Samsung Galaxy Buds2 Pro (SM-R510NZAACIS) черный",
    rating: 5,
    url: "https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-sm-r510nzaacis-chernyi-106128763/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/h60/61857930051614/samsung-sm-r510nzaacis-cernyj-106128763-1.jpg",
    link: "https://t.me/webdev2023labs/12",
    category: "Наушники",
    likes: 0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/