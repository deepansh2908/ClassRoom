const express = require("express");

const Router = express.Router();

Router.get("/classes", (req,res) => {
    res.send('show classes');
});

module.exports = Router;