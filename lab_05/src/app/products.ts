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
  },
  {
    id: 11,
    name: "Apple AirPods",
    price: 64448,
    description: "AirPods настраиваются в одно касание. Автоматически включаются и устанавливают соединение. Пользоваться ими невероятно легко.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/h64/46637140475934/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg",
    link: "https://t.me/webdev2023labs/13",
    category: "Наушники",
    likes: 0
  },
  {
    id: 12,
    name: "Apple AirPods Pro 2nd generation",
    price: 120756,
    description: "Наушники Apple AirPods Pro 2nd generation белый",
    rating: 5,
    url: "https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h10/he6/62281477193758/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg",
    link: "https://t.me/webdev2023labs/14",
    category: "Наушники",
    likes: 0
  },
  {
    id: 13,
    name: "Apple AirPods Max",
    price: 369385,
    description: "Наушники Apple AirPods Max серебристый",
    rating: 5,
    url: "https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/h71/33524667777054/apple-airpods-max-serebristyj-100949286-1-Container.jpg",
    link: "https://t.me/webdev2023labs/15",
    category: "Наушники",
    likes: 0
  },
  {
    id: 14,
    name: "Dyson V15 Detect Absolute",
    price: 369385,
    description: "Пылесос Dyson V15 Detect Absolute имеет три режима мощности. Автоматический режим интеллектуально адаптирует мощность всасывания, обеспечивая оптимальный баланс мощности всасывания и времени работы.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-102269286/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/h23/67795766935582/dyson-v15-detect-absolute-serebristyi-102269286-2.jpg",
    link: "https://t.me/webdev2023labs/16",
    category: "Dyson",
    likes: 0
  },
  {
    id: 15,
    name: "Dyson HS05",
    price: 449980,
    description: "Dyson HS05 фен-щетка 1300 W",
    rating: 5,
    url: "https://kaspi.kz/shop/p/dyson-hs05-fen-schetka-1300-w-108483916/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/h3e/69147230666782/stailer-dyson-hs05-blue-rose-108483916-1.jpg",
    link: "https://t.me/webdev2023labs/17",
    category: "Dyson",
    likes: 0
  },
  {
    id: 16,
    name: "Dyson Pure Cool TP08 ",
    price: 389990,
    description: "Dyson Pure Cool TP08 серебристый",
    rating: 5,
    url: "https://kaspi.kz/shop/p/dyson-pure-cool-tp08-serebristyi-102472458/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hed/h24/46300052488222/dyson-pure-cool-tp08-102472458-1.jpg",
    link: "https://t.me/webdev2023labs/18",
    category: "Dyson",
    likes: 0
  },
  {
    id: 17,
    name: "Dyson HD07 Supersonic",
    price: 379990,
    description: "Мягкий ионизирующий поток воздуха дает возможность высушить волосы намного быстрее, не думая о безопасном расстоянии. Также, можно безопасно вытягивать отдельные пряди без риска повредить волосы. Комплект из пяти магнитных насадок в комплекте хорошо фиксируются, быстро сменяются и не перегреваются при работе. Удобный компактный кейс для фена идеально впишется в интерьер и также, его удобно взять с собой в дорогу.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/dyson-hd07-supersonic-red-fen-1600-w-108041859/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h36/h21/66893979680798/fen-dyson-hd07-supersonic-red-108041859-1.jpg",
    link: "https://t.me/webdev2023labs/19",
    category: "Dyson",
    likes: 0
  },
  {
    id: 18,
    name: "Dyson HS05 Airwrap Complete Long",
    price: 454980,
    description: "Включает переработанные вложения. Для волос длиной до груди или длиннее. Разработан для нескольких типов волос. С новыми цилиндрами, чтобы завивать и волновать в обоих направлениях, щетками для контроля и придания формы, а также многофункциональной сушилкой для разглаживания Coanda, чтобы высушивать, разглаживать и скрывать разлетающиеся волосы.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-fen-schetka-1300-w-104497394/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7f/h97/50098935627806/dyson-hs05-airwrap-complete-long-fen-shchetka-1300-w-104497394-1.jpg",
    link: "https://t.me/webdev2023labs/20",
    category: "Dyson",
    likes: 0
  },
  {
    id: 19,
    name: "Tiziana Terenzi Kirke ",
    price: 54900,
    description: "Парфюмерная вода Kirke' открывается фруктовыми сладостными и сочными нотами маракуйи, персиков, малины, черной смородины и груши, настоящий золотой алхимический эликсир. В сердце аромат поддерживает фруктовую феерию нотами очаровательного ландыша, а шлейф похож на прогулку по песку босыми ногами, нежный гелиотропин, сандал, ваниль, мускус и пачули. Аромат Kirke восхищает своего владельца как знаменитый очаровывающий эликсир богини Цирцеи, направляя по таинственным путям в поисках удивительных чудес. Он вдохновляет, создавая изысканную ауру утонченной чувственности.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/tiziana-terenzi-kirke-parfjumernaja-voda-edp-100-ml-17301541/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3e/he9/31817540206622/tiziana-terenzi-kirke-edp-100-ml-17301541-1.jpg",
    link: "https://t.me/webdev2023labs/21",
    category: "Парфюмерия",
    likes: 0
  },
  {
    id: 20,
    name: "CHANEL Bleu De",
    price: 57985,
    description: "Аромат подчеркивает свободу и независимость своего обладателя, но при этом подчиняет его самого строгим правилам шика и элегантности. Он обязан быть образцом мужественности. При его появлении женщины должны вздыхать, а мужчины скрипеть зубами от зависти.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/chanel-bleu-de-chanel-parfjumernaja-voda-edp-50-ml-17301495/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h76/ha0/31814694240286/chanel-bleu-de-chanel-edp-50-ml-17301495-1.jpg",
    link: "https://t.me/webdev2023labs/22",
    category: "Парфюмерия",
    likes: 0
  },
  {
    id: 21,
    name: "Dior Sauvage",
    price: 59799,
    description: "Sauvage Eau de Parfum Christian Dior — это аромат для мужчин, он принадлежит к группе восточные фужерные. Это новое издание- Sauvage Eau de Parfum выпущен в 2018 году. Парфюмер- Francois Demachy. Верхняя нота- Бергамот, средние ноты- Лаванда, Китайский перец, Звездчатый анис и Мускатный орех, базовые ноты- Амброксан и Ваниль.",
    rating: 5,
    url: "https://kaspi.kz/shop/p/dior-sauvage-parfjumernaja-voda-edp-100-ml-100178749/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcc/h60/32602046758942/christian-dior-sauvage-edp-100-ml-100178749-1-Container.jpg",
    link: "https://t.me/webdev2023labs/23",
    category: "Парфюмерия",
    likes: 0
  },
  {
    id: 22,
    name: "Dior Sauvage Elixir ",
    price: 76997,
    description: "Верхние ноты: Сочный грейпфрут. Ноты сердца: Эссенция Лаванды, Сычуанский перец Базовые ноты: Амбровый аккорд, Эссенция Пачули Sauvage Elixir, это композиция, в которой каждая нота передается максимально точно. Франсуа Демаши внес изменения в партитуру аромата: он усилил звучание каждой ноты, уменьшил количество «музыкантов в оркестре», но сделал его мощным. Эта кропотливая работа привела к парадоксу: аромат зазвучал ярко и интенсивно. И каждая нота аромата, свежая или пряная, становится ликующей, взрывной, поразительной и всепоглощающей. ",
    rating: 5,
    url: "https://kaspi.kz/shop/p/dior-sauvage-elixir-parfjumernaja-voda-edp-60-ml-103903510/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2a/h1b/49024372441118/sauvage-elixir-parfumernyj-eliksir-60-ml-103903510-1.jpg",
    link: "https://t.me/webdev2023labs/24",
    category: "Парфюмерия",
    likes: 0
  },
  {
    id: 23,
    name: "CHANEL Coco Mademoiselle ",
    price: 63939,
    description: "CHANEL Coco Mademoiselle парфюмерная вода EDP 50 мл",
    rating: 5,
    url: "https://kaspi.kz/shop/p/chanel-coco-mademoiselle-parfjumernaja-voda-edp-50-ml-17302625/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h41/h36/31782067535902/chanel-coco-mademoiselle-edp-50-ml-17302625-1.jpg",
    link: "https://t.me/webdev2023labs/25",
    category: "Парфюмерия",
    likes: 0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/