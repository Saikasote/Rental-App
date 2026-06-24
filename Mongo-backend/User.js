const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
      trim: true,
    },

    user_Email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    user_password: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },

    isVerifiedRenter: {
      type: Boolean,
      default: false,
    },

    // Properties owned by the user
    prop_own: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
      },
    ],

    // Saved properties
    user_saved: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
      },
    ],

    // Favourite properties
    user_fav: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);
