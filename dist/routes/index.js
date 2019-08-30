"use strict";

var express = require('express');

var router = express.Router();
router.get('/', function (req, res) {
  res.render('index.html', {
    title: 'Patagonia al Mundo'
  });
});
router.get('/negocios', function (req, res) {
  res.render('negocios.html', {
    title: 'Patagonia al Mundo'
  });
});
router.get('/sabores', function (req, res) {
  res.render('sabores.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/increibles', function (req, res) {
  res.render('increibles.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/lugares', function (req, res) {
  res.render('lugares.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/condiciones', function (req, res) {
  res.render('condiciones.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/destinos', function (req, res) {
  res.render('destinos.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/patagonia-market', function (req, res) {
  res.render('patagonia-market.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/invierte', function (req, res) {
  res.render('invierte.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/product', function (req, res) {
  res.render('product.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/product1', function (req, res) {
  res.render('product1.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/product2', function (req, res) {
  res.render('product2.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/product3', function (req, res) {
  res.render('product3.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/product4', function (req, res) {
  res.render('product4.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/product5', function (req, res) {
  res.render('product5.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/product5', function (req, res) {
  res.render('product5.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/product6', function (req, res) {
  res.render('product6.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/product7', function (req, res) {
  res.render('product7.html', {
    title: 'Patagonia al mundo'
  });
});
router.get('/product8', function (req, res) {
  res.render('product8.html', {
    title: 'Patagonia al mundo'
  });
});
module.exports = router;