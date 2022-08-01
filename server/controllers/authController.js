const router = require('express').Router();
//const jwt = require('jsonwebtoken');
//const User = require('../models/User');

const isAuth = require('../middlewares/isAuthenticated');
const isGuest = require('../middlewares/isGuest');

const config = require('../config/index');

const { json } = require('express');

router.post('/login', async (req, res, next) => {
    try {
        let result = await authService.login(req.body);
        res.status(200).json({result});
    } catch (error) {
        console.log(error);
        return json(error);
    }
});

router.post('/register', async (req, res) => {
    // TODO: isPublic prop
    try {
        let result = await authService.register(req.body);
        console.log(result);
        return json(result);
    } catch (error) {
        console.log(error);
        return json(error);
    }

});

module.exports = router;