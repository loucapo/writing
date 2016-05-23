module.exports = function(sequelize, Sequelize) {
  return sequelize.define('mdl_groups_members', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    groupid: {
      type: Sequelize.INTEGER(10),
      defaultValue: '0',
      allowNull: false
    },
    userid: {
      type: Sequelize.INTEGER(10),
      defaultValue: '0',
      allowNull: false
    },
    component: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    timeadded: {
      type: Sequelize.INTEGER(10),
      defaultValue: '0',
      allowNull: false
    },
    itemid: {
      type: Sequelize.INTEGER(10),
      defaultValue: '0',
      allowNull: false
    }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
