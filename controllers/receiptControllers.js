const receiptServices = require('../services/receiptServices');
const bahanServices = require('../services/bahanServices');
let receiptControllers = {
    getAllReceipts: async (req, res) => {
        try {
            const receipts = await receiptServices.getAllReceipts();
            receipts.success ? res.status(200).json(receipts) : res.status(400).json(receipts);
        } catch (err) {
            next(err)
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
                    message: 'Bahan tidak ditemukan'
                })
            }
            
            const receipt = await receiptServices.getReceiptByBahanWithConstraints(bahan, user_id);
            receipt.success ? res.status(200).json(receipt) : res.status(400).json(receipt);
        } catch (err) {
            next(err)
        }
    }
}

module.exports = receiptControllers;