const models = require('../models');
const bahan_bakuModel = models.bahan_baku;

let bahanServices = {
    getByName: async (nama) => {
        return await bahan.findOne({
            where: {
                nama: nama
            }
        })
    }
}

module.exports = bahanServices;
