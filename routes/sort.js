const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const sortController = require("../controllers/sort");

router.get("/", wrapAsync(sortController.sortListings));

module.exports = router;