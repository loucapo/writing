module.exports = function(sequelize, Sequelize) {
  return sequelize.define('mdl_course', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    sortorder: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    fullname: {
      type: Sequelize.STRING(254),
      allowNull: false,
      defaultValue: ''
    },
    shortname: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    idnumber: {
      type: Sequelize.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    summary: {
      type: Sequelize.TEXT
    },
    summaryformat: {
      type: Sequelize.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    format: {
      type: Sequelize.STRING(21),
      allowNull: false,
      defaultValue: 'topics'
    },
    showgrades: {
      type: Sequelize.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    },
    newsitems: {
      type: Sequelize.INTEGER(5),
      allowNull: false,
      defaultValue: '1'
    },
    startdate: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    marker: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    maxbytes: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    legacyfiles: {
      type: Sequelize.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    showreports: {
      type: Sequelize.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    visible: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    visibleold: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    groupmode: {
      type: Sequelize.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    groupmodeforce: {
      type: Sequelize.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    defaultgroupingid: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    lang: {
      type: Sequelize.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    calendartype: {
      type: Sequelize.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    theme: {
      type: Sequelize.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    timecreated: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    timemodified: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    requested: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    enablecompletion: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    completionnotify: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    cacherev: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    }
    // thus far unused bits:
    //   KEY `mdl_cour_cat_ix` (`category`),
    //   KEY `mdl_cour_idn_ix` (`idnumber`),
    //   KEY `mdl_cour_sho_ix` (`shortname`),
    //   KEY `mdl_cour_sor_ix` (`sortorder`)
    // ) ENGINE=InnoDB AUTO_INCREMENT=3 defaultValue: CHARSET=utf8 COMMENT='Central course table';
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
