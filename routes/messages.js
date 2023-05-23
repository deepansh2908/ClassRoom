const express = require("express");

const Router = express.Router();

Router.get("/messages", (req,res) => {
    res.send('messages');
});

module.exports = Router;