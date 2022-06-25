const models = require('../models');

const createUser = async (req, res) => {
    console.log(req);
    try {
        const user = await models.User.create(req.body);
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createUser,
};
