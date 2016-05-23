module.exports = function(sequelize, Sequelize) {
  return sequelize.define('bu_tax_xref', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    business_unit_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    zipcode_taxrate_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
