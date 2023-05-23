const express = require("express");

const Router = express.Router();

Router.get("/account", (req,res) => {
    res.send('account details');
});

module.exports = Router;