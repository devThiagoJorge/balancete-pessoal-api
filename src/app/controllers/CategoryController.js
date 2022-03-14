const Category = require('../models/Category');

module.exports = {
    async index(req, res) {
        return res.send({
            chave: "Olá"
        });
    },

    async create(req, res) {
        const {
            name,
        } = req.body;

        try {
            const category = await Category.create({
                name,
                createdAt: Date.now(),
                updatedAt: Date.now()
            });
            return res.json(category);
        } catch (error) {
            return console.error('Error: ', error);
        }
    },
};