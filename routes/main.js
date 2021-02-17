const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    const data = {
        title: "Curry and Noodle"
    }
    res.render('home', data)
});

module.exports = router