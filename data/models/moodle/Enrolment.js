module.exports = function(sequelize, Sequelize) {
  return sequelize.define('mdl_enrol', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    enrol: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: ''
    },
    courseid: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    },
    sortorder: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    name: {
      type: Sequelize.STRING(255)
      //qqq
      //DEFAULT NULL,
    },
    enrolperiod: {
      type: Sequelize.INTEGER(10),
      defaultValue: '0'
    },
    enrolstartdate: {
      type: Sequelize.INTEGER(10),
      defaultValue: '0'
    },
    enrolenddate: {
      type: Sequelize.INTEGER(10),
      defaultValue: '0'
    },
    expirynotify: {
      type: Sequelize.BOOLEAN,
      defaultValue: '0'
    },
    expirythreshold: {
      type: Sequelize.INTEGER(10),
      defaultValue: '0'
    },
    notifyall: {
      type: Sequelize.BOOLEAN,
      defaultValue: '0'
    },
    password: {
      type: Sequelize.STRING(50),
      //qqq DEFAULT NULL,
    },
    cost: {
      type: Sequelize.STRING(20),
      //qqq DEFAULT NULL,
    },
    currency: {
      type: Sequelize.STRING(3),
      //qqq DEFAULT NULL,
    },
    roleid: {
      type: Sequelize.INTEGER(10),
      defaultValue: '0'
    },
    customint1: {
      type: Sequelize.INTEGER(10),
      //qqq DEFAULT NULL,
    },
    customint2: {
      type: Sequelize.INTEGER(10),
      //qqq DEFAULT NULL,
    },
    customint3: {
      type: Sequelize.INTEGER(10),
      //qqq DEFAULT NULL,
    },
    customint4: {
      type: Sequelize.INTEGER(10),
      //qqq DEFAULT NULL,
    },
    customint5: {
      type: Sequelize.INTEGER(10),
      //qqq DEFAULT NULL,
    },
    customint6: {
      type: Sequelize.INTEGER(10),
      //qqq DEFAULT NULL,
    },
    customint7: {
      type: Sequelize.INTEGER(10),
      //qqq DEFAULT NULL,
    },
    customint8: {
      type: Sequelize.INTEGER(10),
      //qqq DEFAULT NULL,
    },
    customchar1: {
      type: Sequelize.STRING(255),
      //qqq DEFAULT NULL,
    },
    customchar2: {
      type: Sequelize.STRING(255),
      //qqq DEFAULT NULL,
    },
    customchar3: {
      type: Sequelize.STRING(1333),
      //qqq DEFAULT NULL,
    },
    customdec1: {
      type: Sequelize.DECIMAL(12, 7)
      //qqq DEFAULT NULL,
    },
    customdec2: {
      type: Sequelize.DECIMAL(12, 7)
      //qqq DEFAULT NULL,
    },
    customtext1: {
      type: Sequelize.TEXT
    },
    customtext2: {
      type: Sequelize.TEXT
    },
    customtext3: {
      type: Sequelize.TEXT
    },
    customtext4: {
      type: Sequelize.TEXT
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
    //   PRIMARY KEY (`id`),
    //   KEY `mdl_enro_enr_ix` (`enrol`),
    //   KEY `mdl_enro_cou_ix` (`courseid`)
    // ) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='Instances of enrolment plugins used in courses, fields marke';
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
