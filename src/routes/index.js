const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', {title: 'Patagonia Market'});

});

router.get('/ventas', (req, res) => {
    res.render('ventas.html', {title: 'Patagonia Market'});
       
});

    router.get('/contact', (req, res) => {
     res.render('contact.html', {title: 'Patagonia Market'});
        
});

router.get('/Terminos', (req, res) => {
    res.render('Terminos.html', {title: 'Patagonia Market'});
       
});

router.get('/invierte', (req, res) => {
    res.render('invierte.html', {title: 'Patagonia Market'});
       
});

router.get('/product', (req, res) => {
    res.render('product.html', {title: 'Patagonia Market'});
       
});

router.get('/product1', (req, res) => {
    res.render('product1.html', {title: 'Patagonia Market'});
       
});

router.get('/product2', (req, res) => {
    res.render('product2.html', {title: 'Patagonia Market'});
       
});

router.get('/product3', (req, res) => {
    res.render('product3.html', {title: 'Patagonia Market'});
       
});

router.get('/product4', (req, res) => {
    res.render('product4.html', {title: 'Patagonia Market'});
       
});

router.get('/product5', (req, res) => {
    res.render('product5.html', {title: 'Patagonia Market'});
       
});

router.get('/product5', (req, res) => {
    res.render('product5.html', {title: 'Patagonia Market'});
       
});

router.get('/product6', (req, res) => {
    res.render('product6.html', {title: 'Patagonia Market'});
       
});

router.get('/product7', (req, res) => {
    res.render('product7.html', {title: 'Patagonia Market'});
       
});

router.get('/product8', (req, res) => {
    res.render('product8.html', {title: 'Patagonia Market'});
       
});

router.get('/exporta.html', (req, res) => {
    res.render('exporta.html', {title: 'Patagonia Market'});
       
});
router.get('/exporta1.html', (req, res) => {
    res.render('exporta1.html', {title: 'Patagonia Market'});
       
});

router.get('/exporta2.html', (req, res) => {
    res.render('exporta2.html', {title: 'Patagonia Market'});
       
});
router.get('/exporta3.html', (req, res) => {
    res.render('exporta3.html', {title: 'Patagonia Market'});
       
});
router.get('/exporta4.html', (req, res) => {
    res.render('exporta4.html', {title: 'Patagonia Market'});
       
});
router.get('/exporta5.html', (req, res) => {
    res.render('exporta5.html', {title: 'Patagonia Market'});
       
});
router.get('/exporta6.html', (req, res) => {
    res.render('exporta6.html', {title: 'Patagonia Market'});
       
});
module.exports = router;