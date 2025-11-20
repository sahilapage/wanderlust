const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN; 
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async(req, res) => {
    let allListings = await Listing.find();
    return res.render("listings/index.ejs", {allListings, sort: ""});
};

module.exports.renderNewForm = (req, res) => {
    return res.render("listings/new.ejs");
};

module.exports.showListings = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id)
    .populate({
        path: "reviews",
        populate: {
            path: "author"
        }
    })
    .populate("owner");

    if(!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    return res.render("listings/show.ejs", {listing});
};

module.exports.createListing = async (req, res) => {
    let response = await geocodingClient.forwardGeocode({ 
        query: req.body.listing.location, 
        limit: 1 
    }).send();
 
    let url = req.file.path;
    let filename = req.file.filename;
    
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    newListing.geometry = response.body.features[0].geometry;
    
    await newListing.save();

    req.flash("created", "New Listing Created!");
    return res.redirect("/listings");
};

module.exports.updateListing = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    if(typeof req.file != "undefined") {
        let filename = req.file.filename;
        let url = req.file.path;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash("updated", "Listing Updated Successfully!")
    return res.redirect(`/listings/${id}`);
};

module.exports.editListing = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_50,w_100");
    return res.render("listings/edit.ejs", {listing, originalImageUrl});
};

module.exports.deleteListing = async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("deleted", "Listing Deleted!");
    return res.redirect("/listings");
};

module.exports.categoryListings = async (req, res) => {
    let {category} = req.params;
    category = category.replace(/-/g, " ");
    let categoryListings = await Listing.find({ category });

    if (!categoryListings.length) {
      req.flash("error", `No listings found for category: ${category}`);
      return res.redirect("/listings");
    }

    return res.render("listings/category.ejs", {categoryListings, category});
};

module.exports.addWishlist = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    let user = req.user;
    // user.wishlist.push(listing);

    // await user.save();

    if (!user.wishlist.includes(listing._id)) {
        user.wishlist.push(listing._id);
        await user.save();
        req.flash("success", "Added to Wishlist!");
    } else {
        req.flash("error", "Listing already in your wishlist");
    }

    return res.redirect(`/listings/${id}`);
};

module.exports.deWishlist = async (req, res) => {
    const { id } = req.params;
    const user = req.user;

    if (user.wishlist.includes(id)) {
        user.wishlist = user.wishlist.filter(listingId => listingId.toString() !== id.toString());
        await user.save();
        req.flash("success", "Removed from Wishlist!");
    } else {
        req.flash("error", "Listing was not in your wishlist");
    }

    return res.redirect(`/listings/${id}`);
};

module.exports.showWishListed = async (req, res) => {
    let user = await User.findById(req.user._id).populate("wishlist");
    let listings = user.wishlist;
    
    return res.render("listings/wishlist.ejs", { listings });
};