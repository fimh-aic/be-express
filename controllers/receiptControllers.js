const receiptServices = require("../services/receiptServices");
const bahanServices = require("../services/bahanServices");
const mlServices = require("../services/mlServices");
const FormData = require("form-data");

let receiptControllers = {
  getAllReceipts: async (req, res) => {
    try {
      const receipts = await receiptServices.getAllReceipts();
      receipts.success
        ? res.status(200).json(receipts)
        : res.status(400).json(receipts);
    } catch (err) {
      next(err);
    }
  },
  getReceiptByBahanWithConstraints: async (req, res) => {
    try {
      const { bahan } = req.params;
      const { user_id } = req.body;

      const bahanIst = await bahanServices.getByName(bahan);

      if (!bahanIst) {
        return res.status(400).json({
          success: false,
          message: "Bahan tidak ditemukan",
        });
      }

      const receipt = await receiptServices.getReceiptByBahanWithConstraints(
        bahan,
        user_id
      );
      receipt.success
        ? res.status(200).json(receipt)
        : res.status(400).json(receipt);
    } catch (err) {
      next(err);
    }
  },
  recognizeImage: async (req, res) => {
    try {
      const photo = req["file"];
      if (!photo) {
        return res.status(400).json("Mohon upload photo");
      }
      const form = new FormData();
      form.append("image", photo.buffer, {
        filename: photo.originalname,
        contentType: photo.mimetype,
      });
      const result = await mlServices.recognize(form);
      let response = {
        result: result.data.result,
        confidence: result.data.confidence,
      };
      result.status === 200
        ? res.status(200).json(response)
        : res.status(400).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = receiptControllers;
