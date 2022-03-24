require('dotenv').config();
const Sequelize = require('sequelize');

var sequelize;

if (process.env.NODE_ENV === "production") {
    var sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        define: {
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    });
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        define: {
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    });

    sequelize.sync();
}



module.exports = sequelize;