'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('clinics', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            descriptionHtml: {
                type: Sequelize.TEXT
            },
            descriptionMarkDown: {
                type: Sequelize.TEXT
            },
            image: {
                type: Sequelize.BLOB('long')

            },


            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }, {
            charset: 'utf8',
            collate: 'utf8_general_ci'


        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('clinics');
    }
};