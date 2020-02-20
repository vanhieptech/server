const express = require("express");
const productController = require("../controllers/product.C");
const router = express.Router();



router.get("/", productController.getAll);

router.post("/", productController.addProduct);

router.get("/:id", productController.getByProId);

router.delete("/:id", productController.deleteByProId);

router.patch("/:id", productController.updateByProId);

module.exports = router;