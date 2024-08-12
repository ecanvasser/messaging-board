const express = require("express");
const router = express.Router();
const controller = require("../models/queries.js");

// Routes to index.ejs and shows all messages
router.get("/", controller.getMessages);

// Routes to newMsg.ejs for new message creation
router.get("/new", controller.newMessageGet);

// Adds newly created messages to messages model
router.post("/new", controller.newMessagePost);

// Pulls in message details
router.get("/message/details/:id", controller.getMessageDetails);

module.exports = router;
