const models = require('../models');

const createBusiness = async (req, res) => {
    try {
        console.log(req.body);
        const business = await models.Business.create(req.body);
        return res.status(201).json({
            business,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllBusinesses = async (req, res) => {
    try {
        const businesses = await models.Business.findAll({});
        return res.status(200).json({ businesses });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getBusinessById = async (req, res) => {
    try {
        const { id } = req.params;
        const business = await models.Business.findOne({
            where: { id },
        });
        if (business) {
            return res.status(200).json({ business });
        }
        return res
            .status(404)
            .send('Business with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const updateBusiness = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await models.Business.update(req.body, {
            where: { id },
        });
        if (updated) {
            const updatedBusiness = await models.Business.findOne({ where: { id } });
            return res.status(200).json({ post: updatedBusiness });
        }
        throw new Error('Business not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteBusiness = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await models.Business.destroy({
            where: { id },
        });
        if (deleted) {
            return res.status(204).send('Business deleted');
        }
        throw new Error('Business not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createBusiness,
    getAllBusinesses,
    getBusinessById,
    updateBusiness,
    deleteBusiness,
};
