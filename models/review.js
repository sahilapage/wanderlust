const mongoose = require("mongoose");

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

const reviewSchemma = new mongoose.Schema({
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
});

const Review     = mongoose.model("Review", reviewSchemma);
module.exports = Review;
