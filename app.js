// @ts-check

const express = require('express');

// dotenv
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './client/build')));

const router = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const itemRouter = require('./routes/item');

app.use('/', router);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/item', itemRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode || 500);
  res.send(err.message);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT} PORT!`);
});

