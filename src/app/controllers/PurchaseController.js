const Purchase = require('../models/Purchase');

module.exports = {
    async findAll(req, res) {
        try {
            const purchases = await Purchase.findAll();
            return res.json(purchases);
        } catch (error) {
            return console.error("Error: ", error);
        }
    },

    async create(req, res) {
        const {
            name,
            price,
            description,
            date,
            categoryId
        } = req.body;

        try {
            const purchase = await Purchase.create({
                name,
                price,
                description,
                date,
                categoryId
            });
            return res.json(purchase);

        } catch (error) {
            return console.error('Error: ', error);
        }
    }
};