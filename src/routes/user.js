import express from "express";
import {  get, getAll,create, remove, update } from "../controllers/user";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();

router.get("/users", getAll);
router.get("/users/:id", get);
router.post("/users", create);
router.delete("/users/:id", remove);
router.put("/users/:id", update);

export default router;