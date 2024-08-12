const express = require("express");
const router = express.Router();
const controller = require('../models/queries.js')

// import messages model that will be used to store new messages
const messages = require("../models/messages.js");

//import controller function for new message creation
const newMsg = require('../controllers/newMessage.js');

// Routes to index.ejs and shows all messages
router.get("/", controller.getMessages);

// Routes to newMsg.ejs for new message creation
router.get("/new", controller.newMessageGet);

// Adds newly created messages to messages model
router.post("/new", controller.newMessagePost);

router.get("/message/details/:id", (req, res) => {
    res.render('details', {message: messages[req.params.id]})
})

module.exports = router;
