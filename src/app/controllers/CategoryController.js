const Category = require('../models/Category');
const Sequelize = require('sequelize');
const Op = Sequelize.Op


module.exports = {
    async findAll(req, res) {
        try {
            const categories = await Category.findAll();
            return res.json(categories);
        } catch (error) {
            return console.error("Error: ", error);
        }
    },



    async create(req, res) {
        const {
            name,
        } = req.body;

        const findCategory = await findByName(name);

        if (findCategory != null) {
            return res.status(400).json({
                error: 'Category already exists.'
            });
        }

        try {
            const category = await Category.create({
                name,
            });
            return res.json(category);
        } catch (error) {
            return console.error('Error: ', error);
        }
    },

    async delete(req, res) {
        try {
            await Category.destroy({
                where: {
                    id: req.params.id
                }
            });

            return res.json({
                msg: `Category ${req.params.id} was deleted!`
            });
        } catch (error) {
            return console.error("Error: ", error);
        }
    },
};

async function findByName(name) {
    console.log(name);
    const category = await Category.findOne({
        where: {
            name: name
        }
    });
    console.log(category);
    return category
}