const express=require('express');
const { getAllproducts, addProduct } = require('../controllers/product_controller');
const router=express.Router();
router.get("/getall",getAllproducts);
router.post("/add",addProduct);
module.exports= router;

