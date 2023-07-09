const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

//Save the data
const SaveData = asyncHandler(async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

// Fetch all the data
const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

//get specific Data
const getDataByID = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      res.status(404);
      throw new Error(`Cannot find any product with ID ${id}`);
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

//Update Data
const updateData = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404);
      throw new Error(`Cannot find any product with ID ${id}`);
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

//Delete Data
const deleteData = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404);
      throw new Error(`Cannot find any product with ID ${id}`);
    }
    const updatedProduct = await Product.find({});
    //console.log("Item successfully deleted");
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

module.exports = {
  SaveData,
  getAllProduct,
  getDataByID,
  updateData,
  deleteData,
};
