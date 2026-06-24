const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Property title is required"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    price: {
      type: Number,
      required: [true, "Monthly rent price is required"],
    },
    rating: {
      type: Number,
      default: 5.0,
      min: 1.0,
      max: 5.0,
    },
    image: {
      type: String,
      required: [true, "Property thumbnail image url is required"],
    },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    sqft: { type: Number, required: true },
    category: {
      type: String,
      enum: ["Apartments", "Houses", "Villas", "Cabins", "Studio"],
      default: "Apartments",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Property", PropertySchema);
