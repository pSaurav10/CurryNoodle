const express = require('express');
const nodemailer = require('nodemailer');
const alert = require('alert');
const router = express.Router();

router.get('/', function (req, res, next) {
    
    res.render('home')
});

router.get('/menu', function (req, res, next) {
    res.render('menu')
});

router.get('/contact', function (req, res, next) {
    res.render('contact')
});


router.post('/contact-us', (req, res) => {
    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.mail, // generated ethereal user
            pass: process.env.password  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"C & N Contact" sangaminmail@gmail.com', // sender address
        to: process.env.mail, // list of receivers
        subject: 'Curry and Noodle Contact', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.jsonp({success: false})
        }
        res.jsonp({success: true})
    });
});


router.post('/reservation', (req, res) => {
    const output = `
      <p>You have a new reservation request</p>
      <h3>Reservation Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>phone: ${req.body.phone}</li>
        <li>Guests: ${req.body.guests}</li>
        <li>Date: ${req.body.date}</li>
        <li>Time: ${req.body.time}</li>
      </ul>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'sangaminmail@gmail.com', // generated ethereal user
            pass: 'xx3hj4kZULdaM5f'  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"C & N Reservation" sangaminmail@gmail.com', // sender address
        to: 'sangaminmail@gmail.com', // list of receivers
        subject: 'Curry and Noodle Reservation', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.jsonp({success: false})
        }
        res.jsonp({success: true})
    });
});


module.exports = router