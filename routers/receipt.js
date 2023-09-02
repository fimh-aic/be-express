const express = require('express');
const router = express.Router();
const receiptControllers = require('../controllers/receiptControllers');

const path = "/receipts"

router.get(`${path}/:bahan`, receiptControllers.getReceiptByBahanWithConstraints);

module.exports = router;
