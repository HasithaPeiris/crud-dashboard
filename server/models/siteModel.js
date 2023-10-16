const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema(
  {
    siteName: { type: String, required: true },
    managerName: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Site", SiteSchema);
