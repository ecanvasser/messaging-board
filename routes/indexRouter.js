const express = require("express");
const router = express.Router();

// import messages model that will be used to store new messages
const messages = require("../models/messages.js");

//import controller function for new message creation
const newMsg = require('../controllers/newMessage.js');

// Routes to index.ejs and shows all messages
router.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

// Routes to newMsg.ejs for new message creation
router.get("/new", (req, res) => {
  res.render("newMsg");
});

router.get("/message/details/:id", (req, res) => {
    res.render('details', {message: messages[req.params.id]})
})

// Adds newly created messages to messages model
router.post("/new", newMsg);

module.exports = router;
