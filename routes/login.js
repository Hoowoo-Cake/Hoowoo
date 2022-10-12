// @ts-check
const express = require('express');
const router = express.Router();
const mongoClient = require('./mongo');

router.get('/', (req, res) => {
  res.render('login');
});


router.post('/', async (req, res) => {
  const client = await mongoClient.connect();
  const userCursor = client.db('hoowoo').collection('users');
  const duplicated = await userCursor.findOne({ id: req.body.email });

  if(duplicated !== null){
    if(duplicated.password === req.body.password){
      res.render('index');
    }
  }else{
    res.status(300);
    res.send(
      '해당 email이 존재하지 않습니다.<br><a href="/login">로그인 페이지로 이동</a>'
    );
  }
});

router.get('/logout', (req, res, next) => {
  req.logOut((err) => {
    if (err) return next(err);
    return res.redirect('/');
  });
});

module.exports = router;
