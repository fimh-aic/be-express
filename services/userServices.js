const models = require('../models');
const userModel = models.user;
let userServices = {
    login: async (username, password) => {
        try {
            const user = await models.User.findOne({
                where: {
                    username: username,
                    password: password
                }
            });
            if (user) {
                return {
                    success: true,
                    message: 'Login berhasil',
                    data: user
                }
            } else {
                return {
                    success: false,
                    message: 'Login gagal'
                }
            }
        } catch (err) {
            return {
                success: false,
                message: err.message
            }
        }
    },
    getUserByUsername: async (username) => {
        try {
            const user = await models.User.findOne({
                where: {
                    username: username
                }
            });
            if (user) {
                return {
                    success: true,
                    message: 'User ditemukan',
                    data: user
                }
            } else {
                return {
                    success: false,
                    message: 'User tidak ditemukan'
                }
            }
        } catch (err) {
            return {
                success: false,
                message: err.message
            }
        }
    },
    create: async (username, password) => {
        try {
            let user = await userModel.create({
                username,
                password
            });

            if (user) {
                return {
                    success: true,
                    message: 'Register berhasil',
                    data: user
                }
            }
        } catch (err) {
            return {
                success: false,
                message: err.message
            }
        }
    },
    updatePreferences: async (id, preferences) => {
        try {
            const userPreferences = []
            if (preferences.isLactoseIntolerant) {
                let bahan = await models.BahanBaku.findOne({
                    where: {
                        nama: 'susu'
                    }})

                userPreferences.push({
                    user_id: id,
                    bahan_id: bahan.id
                })
            }

            if (preferences.isDiet) {
                let bahan = await models.BahanBaku.findOne({
                    where: {
                        nama: 'nasi'
                    }})

                userPreferences.push({
                    user_id: id,
                    bahan_id: bahan.id
                })
            }

            return {
                success: true,
                message: 'Update berhasil',
            }

        } catch (err) {
            return {
                success: false,
                message: err.message
            }
        }
    }
}

module.exports = userServices;