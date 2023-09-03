const express = require('express');
const router = express.Router();
const receiptControllers = require('../controllers/receiptControllers');
import multer, { File } from 'multer';
const path = "/receipts"

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    }
    else {
        cb(new Error('File type not supported'), false)
    }
}

const multerStorage = multer.memoryStorage();
const upload = multer({
    storage: multerStorage,
    fileFilter: fileFilter
});

const uploadPhoto = upload.single('photo');


router.get(`${path}`, receiptControllers.getAllReceipts);
// TO DO: add uploadPhoto as middleware
router.get(`${path}/`, uploadPhoto, /** ntar di sini manggil controller baut handle upload */);

module.exports = router;
