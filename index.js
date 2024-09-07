const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index');
});

router.get('/about',(req, res) => {
    res.render('about');
});

router.get('/form', (req,res) => {
    res.render('form');
});

router.get('/log', (req, res) => {
    res.render('log');
});

router.get('/play', (req, res) => {
    res.render('play');
});

module.exports = router;