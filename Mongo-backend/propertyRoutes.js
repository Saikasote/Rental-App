const express = require("express");
const router = express.Router();
const Property = require("./Property"); //

router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    let filterQuery = {};

    if (category && category !== "All" && category !== "All Places") {
      filterQuery.category = category;
    }

    const properties = await Property.find(filterQuery).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: properties.length,
      data: properties,
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error: Unable to fetch properties",
    });
  }
});

module.exports = router;
