module.exports = function(sequelize, Sequelize) {
  return sequelize.define('mdl_grade_grades', {
    id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    },
    itemid: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
    },
    userid: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
    },
    rawgrade: {
      type: Sequelize.DECIMAL(10,5),
      allowNull: true,
    },
    rawgrademax: {
      type: Sequelize.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 100.00000
    },
    rawgrademin: {
      type: Sequelize.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 0.00000
    },
    rawscaleid: {
      type: Sequelize.INTEGER(10),
      allowNull: true,
    },
    usermodified: {
      type: Sequelize.INTEGER(10),
      allowNull: true,
    },
    finalgrade: {
      type: Sequelize.DECIMAL(10,5),
      allowNull: true,
    },
    hidden: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    locked: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    locktime: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    exported: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    overridden: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    excluded: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    feedback: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    feedbackformat: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    information: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    informationformat: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    timecreated: {
      type: Sequelize.INTEGER(10),
      allowNull: true,
    },
    timemodified: {
      type: Sequelize.INTEGER(10),
      allowNull: true,
    },
    aggregationstatus: {
      type: Sequelize.STRING(10),
      allowNull: false,
      defaultValue: 'unknown'
    },
    aggregationweight: {
      type: Sequelize.DECIMAL(10,5),
      allowNull: true,
    }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
