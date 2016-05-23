module.exports = function(sequelize, Sequelize) {
  return sequelize.define('braintree_transactions', {
    bt_transaction_id: {
      type: Sequelize.STRING(255),
      primaryKey: true,
      allowNull: false
    },
    business_unit: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    product_type: {
      type: Sequelize.ENUM('course'),
      allowNull: true
    },
    product_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    user: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    cost: {
      type: Sequelize.DOUBLE(),
      allowNull: true
    },
    tax: {
      type: Sequelize.DOUBLE(),
      allowNull: true
    },
    total: {
      type: Sequelize.DOUBLE(),
      allowNull: true
    },
    zipcode: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    bt_status: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    date: {
      type: Sequelize.DATE(),
      allowNull: true
    },
    multi: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    enrollment_key: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    transaction_type: {
      type: Sequelize.ENUM('purchase', 'refund', 'partial_refund'),
      allowNull: false
    },
    parent_transaction_id: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    date_completed: {
      type: Sequelize.DATE(),
      allowNull: true
    }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
