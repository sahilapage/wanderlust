const Listing = require("../models/listing");

module.exports.sortListings = async (req, res) => {
    let sortOption = {};
    const sort = req.query.sort || "";

    if (sort == "price_asc") sortOption.price = 1;
    if (sort == "price_desc") sortOption.price = -1;

    const allListings = await Listing.find({}).sort(sortOption);

    res.render("listings/index.ejs", { allListings, sort }); 
};
