const express = require("express");

const router = express.Router();

const {
    getProductos,
    getProductoById,
    deleteProductById,
    postProduct,
    putProductById
} = require("../controllers/productosController");

router.get("/", getProductos);
router.get("/:id", getProductoById);
router.delete("/:id", deleteProductById);
router.post("/", postProduct);
router.put("/:id", putProductById);

module.exports = router;