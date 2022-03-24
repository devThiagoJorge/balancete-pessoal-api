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
            category_id,
            payment_type_id
        } = req.body;


        try {
            const purchase = await Purchase.create({
                name,
                price,
                description,
                date,
                category_id,
                payment_type_id
            });

            return res.json(purchase);

        } catch (error) {
            return console.error('Error: ', error);
        }
    }
};