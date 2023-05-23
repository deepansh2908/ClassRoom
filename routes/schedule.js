const express = require("express");

const Router = express.Router();

Router.get("/schedule", (req,res) => {
    res.send('schedule');
});

module.exports = Router;