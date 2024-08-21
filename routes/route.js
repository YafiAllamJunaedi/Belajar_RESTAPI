import express from "express"
import { getMahasiswa, getMahasiswaByNim, addMahsasiswa, deleteMahasiswa, updateMahasiswa } from "../controllers/mahasiswaController.js"
const router = express.Router();

router.get("/", getMahasiswa)
router.get("/find", getMahasiswaByNim)
router.post("/create", addMahsasiswa)
router.delete("/delete", deleteMahasiswa)
router.put("/update", updateMahasiswa)
export default router;