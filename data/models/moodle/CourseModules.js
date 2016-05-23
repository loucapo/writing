module.exports = function(sequelize, Sequelize) {
  return sequelize.define('mdl_course_modules', {
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
    module: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    instance: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    section: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    idnumber: {
      type: Sequelize.STRING(100)
      //qqq DEFAULT NULL
    },
    added: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    score: {
      type: Sequelize.INTEGER(4),
      allowNull: false,
      defaultValue: 0
    },
    indent: {
      type: Sequelize.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    },
    visible: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    visibleold: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    groupmode: {
      type: Sequelize.INTEGER(4),
      allowNull: false,
      defaultValue: 0
    },
    groupingid: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    completion: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    completiongradeitemnumber: {
      type: Sequelize.INTEGER(10)
      //qqq (DEFAULT NULL)
    },
    completionview: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    completionexpected: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    showdescription: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    availability: {
      type: Sequelize.TEXT
    }

    //   PRIMARY KEY (`id`),
    //   KEY `mdl_courmodu_vis_ix` (`visible`),
    //   KEY `mdl_courmodu_cou_ix` (`course`),
    //   KEY `mdl_courmodu_mod_ix` (`module`),
    //   KEY `mdl_courmodu_ins_ix` (`instance`),
    //   KEY `mdl_courmodu_idncou_ix` (`idnumber`,`course`),
    //   KEY `mdl_courmodu_gro_ix` (`groupingid`)
    // ) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='course_modules table retrofitted from MySQL';
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
  //module.export = CourseModules;
