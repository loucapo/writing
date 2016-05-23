module.exports = function(sequelize, Sequelize) {
  return sequelize.define('mdl_groups', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    courseid: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    },
    idnumber: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT(),
      allowNull: true
    },
    descriptionformat: {
      type: Sequelize.INTEGER(2),
      defaultValue: '0',
      allowNull: false
    },
    enrolmentkey: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    picture: {
      type: Sequelize.INTEGER(10),
      defaultValue: '0',
      allowNull: false
    },
    hidepicture: {
      type: Sequelize.BOOLEAN,
      defaultValue: '0',
      allowNull: false
    },
    timecreated: {
      type: Sequelize.INTEGER(10),
      defaultValue: '0',
      allowNull: false
    },
    timemodified: {
      type: Sequelize.INTEGER(10),
      defaultValue: '0',
      allowNull: false
    }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
