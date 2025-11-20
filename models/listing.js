const mongoose = require("mongoose");
const Review = require("./review.js");

// main()
//  .then(() => {
//     console.log("connection successful");
//  })
//  .catch((err) => {
//     console.log(err);
//  });

// async function main() {
//     await mongoose.connect(process.env.ATLASDB_URL);
// }

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        url: String,
        filename: String
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
    },
    coordinates: {
      type: [Number],
    }
    },
    category: {
      type: String,
      enum: ["Trending", "Rooms", "Farms", "Iconic cities", "Beaches", "Lakefront", "Cabins", "Mountains", "Castles", "Camping", "Jungles", "Arctic", "Deserts"],
    }
});

listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing) {
        await Review.deleteMany({_id: { $in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;