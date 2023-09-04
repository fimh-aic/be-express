const express = require("express");
const router = express.Router();
const receiptControllers = require("../controllers/receiptControllers");
const multer = require("multer");
const path = "/receipts";

const fileFilter = (req, file, cb) => {
  console.log(file);
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("File type not supported"), false);
  }
};

const multerStorage = multer.memoryStorage();
const upload = multer({
  storage: multerStorage,
  fileFilter: fileFilter,
});

const uploadPhoto = upload.single("photo");

router.get(`${path}`, receiptControllers.getAllReceipts);
router.post(
  `${path}/recognize`,
  uploadPhoto,
  receiptControllers.recognizeImage
);
router.get(`${path}/recommend`, receiptControllers.recommendation);

module.exports = router;
