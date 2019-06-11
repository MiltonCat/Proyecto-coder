const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', {title: 'Patagonia al Mundo'});

});

router.get('/ventas', (req, res) => {
    res.render('ventas.html', {title: 'Patagonia al Mundo'});
       
});

    router.get('/contact', (req, res) => {
     res.render('contact.html', {title: 'Patagonia al mundo'});
        
});

router.get('/Terminos', (req, res) => {
    res.render('Terminos.html', {title: 'Patagonia al mundo'});
       
});

router.get('/invierte', (req, res) => {
    res.render('invierte.html', {title: 'Patagonia al mundo'});
       
});

router.get('/product', (req, res) => {
    res.render('product.html', {title: 'Patagonia al mundo'});
       
});

router.get('/product1', (req, res) => {
    res.render('product1.html', {title: 'Patagonia al mundo'});
       
});

router.get('/product2', (req, res) => {
    res.render('product2.html', {title: 'Patagonia al mundo'});
       
});

router.get('/product3', (req, res) => {
    res.render('product3.html', {title: 'Patagonia al mundo'});
       
});

router.get('/product4', (req, res) => {
    res.render('product4.html', {title: 'Patagonia al mundo'});
       
});

router.get('/product5', (req, res) => {
    res.render('product5.html', {title: 'Patagonia al mundo'});
       
});

router.get('/product5', (req, res) => {
    res.render('product5.html', {title: 'Patagonia al mundo'});
       
});

router.get('/product6', (req, res) => {
    res.render('product6.html', {title: 'Patagonia al mundo'});
       
});

router.get('/product7', (req, res) => {
    res.render('product7.html', {title: 'Patagonia al mundo'});
       
});

router.get('/product8', (req, res) => {
    res.render('product8.html', {title: 'Patagonia al mundo'});
       
});

router.get('/condiciones.pug', (req, res) => {
    res.render('condiciones.pug', {title: 'Patagonia al mundo'});
       
});


router.get('/about.pug', (req, res) => {
    res.render('about.pug', {title: 'Patagonia al mundo'});
       
});


module.exports = router;