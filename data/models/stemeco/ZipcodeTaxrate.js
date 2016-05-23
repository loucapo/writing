module.exports = function(sequelize, Sequelize) {
  return sequelize.define('zipcode_taxrate', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    zip_start: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    zip_end: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    tax_rate: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
