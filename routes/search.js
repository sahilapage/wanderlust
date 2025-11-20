const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const searchController = require("../controllers/search");

router.get("/", wrapAsync(searchController.searchResult));

module.exports = router;