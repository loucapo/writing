module.exports = function(sequelize, Sequelize) {
  return sequelize.define('mdl_grade_categories', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    courseid: {
      type: Sequelize.INTEGER(10),
      //allowNull: false,
      allowNull: true,
      defaultValue: '73'
    },
    depth: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    fullname: {
      type: Sequelize.STRING(255),
      //allowNull: false,
      allowNull: true
    },
    aggregation: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    keephigh: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    droplow: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    aggregateonlygraded: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    aggregateoutcomes: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    timecreated: {
      type: Sequelize.INTEGER(10),
      //allowNull: false
      allowNull: true,
      defaultValue: 0
    },
    timemodified: {
      type: Sequelize.INTEGER(10),
      //allowNull: false
      allowNull: true,
      defaultValue: 0
    },
    hidden: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    parent: {
      type: Sequelize.INTEGER(10),
      allowNull: true
    },
    path: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
