const express = require("express");
const router = express.Router();
const messages = require("../models/messages.js");

// Routes to index.ejs and shows all messages
router.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

// Routes to newMsg.ejs for new message creation
router.get("/new", (req, res) => {
  res.render("newMsg");
});

// Adds newly created messages to messages model
router.post("/new", (req, res) => {
  const reqBody = { ...req.body, added: new Date() };
  messages.push(reqBody);
  res.redirect("/");
});

module.exports = router;
