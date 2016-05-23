module.exports = function(sequelize, Sequelize) {
  return sequelize.define('mdl_role_assignments', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    roleid: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    contextid: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    userid: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    timemodified: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    modifierid: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    component: {
      type: Sequelize.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    itemid: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    sortorder: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
  }, {
    freezeTableName: true
  });
};
