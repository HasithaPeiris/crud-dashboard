const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema(
  {
    supplierName: { type: String, required: true },
    companyName: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: String, required: true },
    contactNumber: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Supplier", SupplierSchema);
