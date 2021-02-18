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

module.exports = router