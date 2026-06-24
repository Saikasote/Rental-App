require("dotenv").config();
const express = require("express");
const connect = require("./db");
const cors = require("cors");
const propertyRoutes = require("./propertyRoutes");
const userRoutes = require("./userRoutes");

const app = express();
const port = 5000;

connect();

app.use(cors());
app.use("/api/properties", propertyRoutes);
app.use("/api/users", userRoutes);

app.get("/properties", (req, res) => {
  res.send("Express + MongoDB backend is running successfully!");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Backend listening on all network interfaces on port ${port}`);
});
