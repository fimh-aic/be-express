const userServices = require('../services/userServices');

let userControllers = {
    login: async (req, res) => {
        try{
            const { username, password } = req.body;
            const user = await userServices.login(username, password);
            user.success ? res.status(200).json(user) : res.status(400).json(user);
        }catch(err){
            next(err)
        }
    },
    register: async (req, res) => {
        try {
            console.log(req.body)
            const { username, password } = req.body;
            const check = await userServices.getUserByUsername(username);
            if (check.success) {
                return res.status(400).json({
                    success: false,
                    message: 'Username sudah terdaftar'
                })
            } 
            const user = await userServices.create(username, password);
            user.success ? res.status(200).json(user) : res.status(400).json(user);
        } catch (err) {
            next(err)
        }
    },
    updatePreferences: async (req, res) => {
        try {
            const { id } = req.params;
            const { preferences } = req.body;
            const user = await userServices.updatePreferences(id, preferences);
            user.success ? res.status(200).json(user) : res.status(400).json(user);
        } catch (err) {
            next(err)
        }
    }
}

module.exports = userControllers;