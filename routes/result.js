const express = require("express");

const Router = express.Router();

Router.get("/result", (req,res) => {
    res.send('result');
});

module.exports = Router;