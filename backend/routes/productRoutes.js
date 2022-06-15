import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/addproduct").post(createProduct);
router.route("/").get(getAllProducts);

export default router;
