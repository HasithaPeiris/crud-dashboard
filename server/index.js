const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const siteRoute = require("./routes/siteRoutes");
const supplierRoute = require("./routes/supplierRoutes");
const itemRoute = require("./routes/itemRoutes");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/sites", siteRoute);
app.use("/api/suppliers", supplierRoute);
app.use("/api/items", itemRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
