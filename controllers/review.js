const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview = async(req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    newReview.author = req.user;
    listing.reviews.push(newReview);
    
    req.flash("reviewCreated", "Review Created Successfully!");

    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteReview = async(req, res) => {
    let {id, reviewId} = req.params;

    req.flash("reviewDeleted", "Review Deleted!");

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
};