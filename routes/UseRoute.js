import { Usecontroller } from "../controllers/UseControllers.js";
import express from "express";

const router = express.Router()

router.post('/api/register', Usecontroller.registrer)

export default router