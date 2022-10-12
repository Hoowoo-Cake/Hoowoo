// @ts-check
const express = require('express');

const multer = require('multer');

const fs = require('fs');

const router = express.Router();
const mongoClient = require('./mongo');

const dir = './uploads';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now());
  },
});
const limits = {
  fileSize: 1024 * 1028 * 2,
};

const upload = multer({ storage, limits });

router.get('/list', async (req, res) => {
  const client = await mongoClient.connect();
  const itemCursor = client.db('hoowoo').collection('items');
  const ITEM =  await itemCursor.find({}).toArray();
  res.render('item_list', {ITEM});
});

router.get('/add', (req, res) => {
  res.render('item_add');
});

router.post('/add', upload.array('img'), async(req, res) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  console.log(req.files);
  
  const client = await mongoClient.connect();
  const itemCursor = client.db('hoowoo').collection('items');
  const counterCursor = client.db('hoowoo').collection('counters');
  const duplicated = await itemCursor.findOne({ name: req.body.name });
  if(duplicated === null){
    const findCount = await counterCursor.findOne({ name:"카운터" });

    const result = await itemCursor.insertOne({
      _id: (findCount.totalItem)+1,
      name : req.body.name,
      detail : req.body.detail,
      delivery : req.body.delivery,
      pickupHour : req.body.pickupHour,
      kindOf : req.body.kindOf,
      color : req.body.color,
      flavor : req.body.flavor,
      size : req.body.size,
      regDate : req.body.regDate,
      address : req.body.address,
      price: parseInt(req.body.price),
      stock: parseInt(req.body.stock),
      status:req.body.status,
      img1: req.files ? req.files[0].filename : null,
      img2: req.files ? req.files[1].filename : null,
      img3: req.files ? req.files[2].filename : null,
    })
    counterCursor.updateOne({ name:"카운터" },{ $inc: { totalItem: 1 } });
    if (result.acknowledged) {
      res.status(200);
      res.send('상품 등록 성공!<br><a href="/item/list">상품 리스트 페이지로 이동</a>');
    } else {
      res.status(500);
      res.send(
        '상품 등록 문제 발생!<br><a href="/item_add">상품등록 페이지로 이동</a>'
      );
    }
  } else {
    res.status(300);
    res.send(
      '중복된 상품이 존재합니다!<br><a href="/item_add">상품등록 페이지로 이동</a>'
    );
  }
})



router.get('/order/:name', async (req, res) => {
  const client = await mongoClient.connect();
  const cursor = client.db('hoowoo').collection('items');
  const SELECTEDITEM = await cursor.findOne({ name:req.params.name });
  res.render('item_order', { SELECTEDITEM });
});

router.post('/order/:name', async(req, res) => {
  const client = await mongoClient.connect();
  const itemCursor = client.db('hoowoo').collection('items');
  const orderCursor = client.db('hoowoo').collection('orders');
  const counterCursor = client.db('hoowoo').collection('counters');
  //주문번호, 상품가격, 상품이름, 상품번호, 
  const findCount = await counterCursor.findOne({ name:"카운터" });
  const findItem = await itemCursor.findOne({ name:req.params.name });
  await orderCursor.insertOne({
    _id: (findCount?.totalOrder)+1,
    orderItemId: findItem?._id,
    name : findItem?.name,
    price : findItem?.price,
  })
  counterCursor.updateOne({ name:"카운터" },{ $inc: { totalOrder: 1 } });
  res.send('주문완료');
});

router.get('/detail/:_id', async (req, res) => {
  const client = await mongoClient.connect();
  const itemCursor = client.db('hoowoo').collection('items');
  const ITEM = await itemCursor.findOne({ _id: parseInt(req.params._id) });
  console.log(ITEM);
  res.render('item_detail', { ITEM });
});

module.exports = router;
