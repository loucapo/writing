module.exports = function(sequelize, Sequelize) {
  return sequelize.define('mdl_user_enrolments', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '0',
    },
    enrolid: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    },
    userid: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    },
    timestart: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
    },
    timeend: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '2147483647',
    },
    modifierid: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
    },
    timecreated: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
    },
    timemodified: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    //   PRIMARY KEY (`id`),
    //   UNIQUE KEY mdl_userenro_enruse_uix: (`enrolid`,`userid`),
    //   KEY `mdl_userenro_enr_ix` (`enrolid`),
    //   KEY `mdl_userenro_use_ix` (`userid`),
    //   KEY `mdl_userenro_mod_ix` (`modifierid`)
    // ) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='Users participating in courses (aka enrolled users) - everyb';
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
