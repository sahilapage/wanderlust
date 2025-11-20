const Listing = require("../models/listing");

module.exports.searchResult = async (req, res) => {
    const searchTerm = req.query.q;

    if(!searchTerm.trim()) {
        return res.render("search", {listings: [], query: ""});
    }

    const listings = await Listing.find({
        $or: [
            {title: {$regex: searchTerm, $options: "i"}},
            {location: {$regex: searchTerm, $options: "i"}},
            {category: {$regex: searchTerm, $options: "i"}},
            {description: {$regex: searchTerm, $options: "i"}}
        ]
    });

    res.render("listings/search.ejs", { listings, query: searchTerm});
};