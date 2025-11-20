if (process.env.NODE_ENV != 'production') {
    require("dotenv").config({ path: "../.env" });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
 .then(() => {
    console.log("connection successful");
 })
 .catch((err) => {
    console.log(err);
 });

async function main() {
    await mongoose.connect(process.env.ATLASDB_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "691de940b22d7a7bd3af5034" }));
    await Listing.insertMany(initData.data);
};

initDB();