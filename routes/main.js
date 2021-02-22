const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    const data = {
        title: "Curry and Noodle"
    }
    res.render('home', data)
});

router.get('/menu',function(req, res, next){
    res.render('menu')
});

router.get('/contact',function(req, res, next){
    res.render('contact')
});

router.post('/contact/contact-us',function(req, res, next){
    
});

module.exports = router