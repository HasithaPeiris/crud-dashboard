const Supplier = require("../models/supplierModel");

// @desc    Add Supplier
// @route   POST /api/suppliers
// @access  Private
const addSupplier = async (req, res) => {
  const newSupplier = new Supplier(req.body);

  try {
    const savedSupplier = await newSupplier.save();
    res.status(200).json(savedSupplier);
  } catch (err) {
    res.status(500).json(err);
  }
};

// @desc    Update Supplier by ID
// @route   PUT /api/suppliers/:id
// @access  Private
const updateSupplier = async (req, res) => {
  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSupplier);
  } catch (err) {
    res.status(500).json(err);
  }
};

// @desc    Delete Supplier by ID
// @route   DELETE /api/suppliers/:id
// @access  Private
const deleteSupplier = async (req, res) => {
  try {
    await Supplier.findByIdAndDelete(req.params.id);
    res.status(200).json("Supplier has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

// @desc    Get Supplier by ID
// @route   GET /api/suppliers/find/:id
// @access  Public
const getSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    res.status(200).json(supplier);
  } catch (err) {
    res.status(500).json(err);
  }
};

// @desc    Get Suppliers
// @route   GET /api/suppliers
// @access  Public
const getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();

    res.status(200).json(suppliers);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getSuppliers,
  getSupplier,
  addSupplier,
  updateSupplier,
  deleteSupplier,
};
