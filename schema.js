const Joi = require('joi');

// const listingSchema = Joi.object({
//     listing: Joi.object({
//         title: Joi.string().required(),
//         description: Joi.string().required(),
//         price: Joi.number().required().min(0),
//         country: Joi.string().required(),
//         location: Joi.string().required(),
//         image: Joi.string().allow("", null)
//     }).required()
// });

const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required().min(0),
    country: Joi.string().required(),
    location: Joi.string().required(),
    image: Joi.string().allow("", null),
    category: Joi.string()
      .valid(
        "Trending",
        "Rooms",
        "Farms",
        "Iconic cities",
        "Beaches",
        "Lakefront",
        "Cabins",
        "Mountains",
        "Castles",
        "Camping",
        "Jungles",
        "Arctic",
        "Deserts"
      )
  }).required()
});


const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required()  
    }).required()
});

module.exports = {reviewSchema, listingSchema};
