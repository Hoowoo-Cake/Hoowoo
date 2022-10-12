// let data = [
//   {
//     item_id : 0,
//     image_id : 'http://localhost:3001/static/media/lettering3.c0dd0bca3b8415522ad5.jpg',
//     item_detail_img : '../pages/Detail/images/Lettering/Lettering1.jpg',
//     imageLocate: '서초구 동작구 사당대로1길 5',
//     name : "Pink-Purple Lettering",
//     content : "작은 케이크 안에 나의 순간이 쌓입니다",
//     price : 34000,
//     store : '_modue'
//   },

//   {
//     item_id : 1,
//     image_id : 'http://localhost:3001/static/media/lettering4.a62f1d6a77c7340d1aa0.jpg',
//     item_detail_img : '../pages/Detail/images/Lettering/Lettering1.jpg',
//     imageLocate: '서대문구 연세로5다길 22-8 1층',
//     name : "Pink",
//     content : "비기닝스티커는 핸디다이어리와 레터링 문구 호환 가능합니다",
//     price : 40000,
//     store : '달달'
//   },

//   {
//     item_id : 2,
//     image_id : 'http://localhost:3001/static/media/lettering5.09f5c9e239a613fce2f2.jpg',
//     item_detail_img : '../pages/Detail/images/Lettering/Lettering1.jpg',
//     imageLocate: '서대문구 연희로5길 58 1층',
//     name : "Colorful",
//     content : "자연의 색이 가득 담긴 시그니처 패턴 케이크",
//     price : 38000,
//     store : '모드에'
//   },
// ]

let data = [
  {
  item_id: 1,
  name: "Pink-Purple Lettering",
  detail: "Pink-Purple 색상 글씨로 레터링 되어있는 케이크입니다",
  delivery: "배달",
  kindOf: "레터링",
  color: "초록",
  flavor: "쑥",
  sizes: [
      {
        size: '1호',
        extraCost: 0,
      },	
      {
        size: '2호',
        extraCost: 1000,
      },
    ],
  price: 12000,
  image_id: 11,
  image_src: '/images/Lettering/lettering1.jpg',
  imageLocate: "서초구 동작구 사당대로1길 5",
  regDate: "2022.02.20",
  stock: 10,
  status: "품절",
  owner_id: 11,
  createdBy: "금쪽이네",
  store_I: 324,
  storeAddress: "서울 여기"
  },

  {
  item_id: 2,
  name: "딸기 케이크",
  detail: "딸기 가득 케이크",
  delivery: "픽업",
  kindOf: "레터링",
  color: "레드",
  flavor: "딸기",
  sizes: [
    {
      size: '1호',
      extraCost: 0,
    },
    {
      size: '2호',
      extraCost: 0,
    },	
    {
      size: '3호',
      extraCost: 1000,
    },
    {
      size: '4호',
      extraCost: 3000,
    },
    {
      size: '2층',
      extraCost: 0,
    },
  ],
  price: 500,
  image_id: 12,
  image_src: "/images/Lettering/lettering2.jpg",
  imageLocate: "서대문고",
  regDate: "2022.02.21",
  stock: 13,
  status: "재고 있음",
  owner_id: 12,
  createdBy: "딸기농장",
  store_Id: 12,
  storeAddress: "서울 종로구"
  },

  {
  item_id: 3,
  name: "애플케이크",
  detail: "한 입 베어먹은 애플 케이크",
  delivery: "배달",
  kindOf: "커스텀",
  color: "화이트",
  flavor: "사과",
  sizes: [
    {
      size: '1호',
      extraCost: 0,
    },	
  ],
  price: 900,
  image_id: 13,
  image_src: "/images/Lettering/lettering3.jpg",
  imageLocate: "부산",
  regDate: "2022.02.12",
  stock: 11,
  status: "재고 있음",
  owner_id: 13,
  createdBy: "",
  store_Id: 13,
  storeAddress: "동작구"
  },

  {
  item_id: 4,
  name: "초코케이크",
  detail: "올인원 초코",
  delivery: "픽업",
  kindOf: "레터링",
  color: "블랙",
  flavor: "초코",
  sizes: [
    {
      size: '1호',
      extraCost: 0,
    },	
    {
      size: '2호',
      extraCost: 1000,
    },
    {
      size: '3호',
      extraCost: 4000,
    },
  ],
  price: 400,
  image_id: 14,
  image_src: "/images/Lettering/lettering4.jpg",
  imageLocate: "구리",
  regDate: "2022.02.10",
  stock: 15,
  status: "재고 있음",
  owner_id: 14,
  createdBy: "초코네",
  store_Id: 14,
  storeAddress: "신촌"
  },
  ]



export default data;