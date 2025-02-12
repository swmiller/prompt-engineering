const express = require('express');
const { getHello } = require('../controllers/helloController');

const setHelloRoute = (app) => {
    app.get('/hello', getHello);
};

module.exports = setHelloRoute;