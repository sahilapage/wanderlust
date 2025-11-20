const { required } = require("joi");
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

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

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing"
    }]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;