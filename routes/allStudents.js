const express = require("express");

const Router = express.Router();

Router.get("/classes/students", (req,res) => {
    res.send('show students');
});

module.exports = Router;