const express = require("express");

const Router = express.Router();

Router.get("/assignments", (req,res) => {
    res.send('assignments');
});

module.exports = Router;