module.exports = function(sequelize, Sequelize) {
  return sequelize.define('mdl_lti', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    course: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    intro: {
      type: Sequelize.TEXT,
    },
    introformat: {
      type: Sequelize.INTEGER(4),
      defaultValue: '0',
    },
    timecreated: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '0',
    },
    timemodified: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '0',
    },
    typeid: {
      type: Sequelize.INTEGER(10),
      //qqq DEFAULT NULL,
    },
    toolurl: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    securetoolurl: {
      type: Sequelize.TEXT,
    },
    instructorchoicesendname: {
      type: Sequelize.BOOLEAN,
      //qqq DEFAULT NULL,
    },
    instructorchoicesendemailaddr: {
      type: Sequelize.BOOLEAN,
      //qqq DEFAULT NULL,
    },
    instructorchoiceallowroster: {
      type: Sequelize.BOOLEAN,
      //qqq DEFAULT NULL,
    },
    instructorchoiceallowsetting: {
      type: Sequelize.BOOLEAN,
      //qqq DEFAULT NULL,
    },
    instructorcustomparameters: {
      type: Sequelize.STRING(255),
      //qqq DEFAULT NULL,
    },
    instructorchoiceacceptgrades: {
      type: Sequelize.BOOLEAN,
      //qqq DEFAULT NULL,
    },
    grade: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '100',
    },
    launchcontainer: {
      type: Sequelize.INTEGER(2),
      allowNull: false,
      defaultValue: '1',
    },
    resourcekey: {
      type: Sequelize.STRING(255),
      //qqq DEFAULT NULL,
    },
    password: {
      type: Sequelize.STRING(255),
      //qqq DEFAULT NULL,
    },
    debuglaunch: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0',
    },
    showtitlelaunch: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0',
    },
    showdescriptionlaunch: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0',
    },
    servicesalt: {
      type: Sequelize.STRING(40),
      //qqq DEFAULT NULL,
    },
    icon: {
      type: Sequelize.TEXT,
    },
    secureicon: {
      type: Sequelize.TEXT,
    }
    //   PRIMARY KEY (`id`),
    //   KEY `mdl_lti_cou_ix` (`course`)
    // ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='This table contains Basic LTI activities instances';
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
