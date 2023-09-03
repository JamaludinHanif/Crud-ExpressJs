import express from "express";
import {
    getSiswa,
    getSiswaById,
    saveSiswa,
    updateSiswa,
    deleteSiswa
} from "../controllers/RplController.js";
 
const router = express.Router();
 
router.get('/Siswa', getSiswa);
router.get('/Siswa/:id', getSiswaById);
router.post('/Siswa', saveSiswa);
router.patch('/Siswa/:id', updateSiswa);
router.delete('/Siswa/:id', deleteSiswa);
 
export default router;