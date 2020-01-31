const router = require("express").Router();
const bookController = require("./book.controller");
const eventController = require("./event.controller");

// API Routes
router.use("/api/books", bookController);
router.use("/api/events", eventController);

module.exports = router;
