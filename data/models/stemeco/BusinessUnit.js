module.exports = function(sequelize, Sequelize) {
  return sequelize.define('business_units', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    business_unit: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    public_key: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    private_key: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    merchant_id: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    bt_descriptor: {
      type: Sequelize.STRING(7),
      allowNull: true
    },
    bt_phone: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    bt_url: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    support_url: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    aws_key: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    aws_secret: {
      type: Sequelize.STRING(255),
      allowNull: true},
    string_group_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
