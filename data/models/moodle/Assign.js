module.exports = function(sequelize, Sequelize) {
  return sequelize.define('mdl_assign', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    course: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    intro: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    introformat: {
      type: Sequelize.INTEGER(4),
      allowNull: false,
      defaultValue: 0
    },
    alwaysshowdescription: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    nosubmissions: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    submissiondrafts: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    sendnotifications: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    sendlatenotifications: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    duedate: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    allowsubmissionsfromdate: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    grade: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    requiresubmissionstatement: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    completionsubmit: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    cutoffdate: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    teamsubmission: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    requireallteammemberssubmit: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    teamsubmissiongroupingid: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    blindmarking: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    revealidentities: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    attemptreopenmethod: {
      type: Sequelize.STRING(10),
      allowNull: false,
      defaultValue: 'none'
    },
    maxattempts: {
      type: Sequelize.INTEGER(6),
      allowNull: false,
      defaultValue: -1
    },
    markingworkflow: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    markingallocation: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    sendstudentnotifications: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
  }, {
    freezeTableName: true
  });
};
