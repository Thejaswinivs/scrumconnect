const express = require('express');
const router = express.Router();

const User = require('../models/user');

//Retreiving data
router.get('/users', (req, res, next)=> {
    User.find(function(err, users){
        res.json(users);
    });
});

//Add data
router.post('/adduser', (req, res,next)=> {
    let user = new User({
        name: req.body.name,
        sex: req.body.sex,
        age: req.body.age,
        country: req.body.country,
        dateCreated: new Date().valueOf()
    });

    user.save((err, user)=> {
        if(err) {
            res.json({msg: "Failed to save User details"});
        } else {
            res.json({msg: user.name + " Thankyou for applying to this useful government service"});
        }
    });
});



module.exports = router;