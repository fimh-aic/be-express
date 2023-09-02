const { Op } = require('sequelize');
const models = require('../models');
const receiptModel = models.reseps;
const bahan_bakuModel = models.bahan_baku;
const receipt_user_alergiModel = models.receipt_user_alergi;
const bahan_resepModel = models.bahan_resep;

let receiptServices = {
    getAllReceipts: async () => {
        try {
            return await receiptModel.findAll();
        } catch (err) {
            return {
                success: false,
                message: err.message
            }
        }
    },

    getReceiptByBahanWithConstraints: async (bahan, user_id) => {
        try {
            return await receipt_user_alergiModel.findAll({
                where: {
                    user_id: {
                        [Op.ne]: user_id
                    }
                },
                include: [{
                    model: bahan_bakuModel,
                    include: [{
                        model: receiptModel,
                        through: 'bahan_resep',
                    }],
                    where: {
                        nama: bahan
                    }
                }]
            })
        } catch (err) {
            return {
                success: false,
                message: err.message
            }
        }
    }
}

module.exports = receiptServices;