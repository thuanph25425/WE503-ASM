import express from "express";
import {  get, getAll,create, remove, update } from "../controllers/product";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/products", create);
router.delete("/products/:id", remove);
router.put("/products/:id", update);

export default router;