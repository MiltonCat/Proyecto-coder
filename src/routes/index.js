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

router.get('/market', (req, res) => {
    res.render('market.html', {title: 'Patagonia Market'});
       
});

router.get('/invierte', (req, res) => {
    res.render('invierte.html', {title: 'Patagonia Market'});
       
});

module.exports = router;