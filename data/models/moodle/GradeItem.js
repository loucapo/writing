module.exports = function(sequelize, Sequelize) {
  return sequelize.define('mdl_grade_items', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    courseid: {
      type: Sequelize.INTEGER(10),
      //qqq (DEFAULT NULL)
    },
    categoryid: {
      type: Sequelize.INTEGER(10),
      //qqq (DEFAULT NULL)
    },
    itemname: {
      type: Sequelize.STRING(255)
      //qqq DEFAULT NULL
    },
    itemtype: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    itemmodule: {
      type: Sequelize.STRING(30),
      //qqq DEFAULT NULL
    },
    iteminstance: {
      type: Sequelize.INTEGER(10),
      //qqq (DEFAULT NULL)
    },
    itemnumber: {
      type: Sequelize.INTEGER(10),
      //qqq (DEFAULT NULL)
    },
    iteminfo: {
      type: Sequelize.TEXT
    },
    idnumber: {
      type: Sequelize.STRING(255)
      //qqq DEFAULT NULL
    },
    calculation: {
      type: Sequelize.TEXT
    },
    gradetype: {
      type: Sequelize.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    grademax: {
      type: Sequelize.DECIMAL(10, 5),
      allowNull: false,
      defaultValue: '100.00000'
    },
    grademin: {
      type: Sequelize.DECIMAL(10, 5),
      allowNull: false,
      defaultValue: '0.00000'
    },
    scaleid: {
      type: Sequelize.INTEGER(10),
      //qqq (DEFAULT NULL)
    },
    outcomeid: {
      type: Sequelize.INTEGER(10),
      //qqq (DEFAULT NULL)
    },
    gradepass: {
      type: Sequelize.DECIMAL(10, 5),
      allowNull: false,
      defaultValue: '0.00000'
    },
    multfactor: {
      type: Sequelize.DECIMAL(10, 5),
      allowNull: false,
      defaultValue: '1.00000'
    },
    plusfactor: {
      type: Sequelize.DECIMAL(10, 5),
      allowNull: false,
      defaultValue: '0.00000'
    },
    aggregationcoef: {
      type: Sequelize.DECIMAL(10, 5),
      allowNull: false,
      defaultValue: '0.00000'
    },
    aggregationcoef2: {
      type: Sequelize.DECIMAL(10, 5),
      allowNull: false,
      defaultValue: '0.00000'
    },
    sortorder: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    display: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    decimals: {
      type: Sequelize.BOOLEAN
      //qqq (DEFAULT NULL)
    },
    hidden: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    locked: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    locktime: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    needsupdate: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    weightoverride: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    timecreated: {
      type: Sequelize.INTEGER(10),
      //qqq (DEFAULT NULL)
    },
    timemodified: {
      type: Sequelize.INTEGER(10),
      //qqq (DEFAULT NULL)
    }
    //   PRIMARY KEY (`id`),
    //   KEY `mdl_graditem_locloc_ix` (`locked`,`locktime`),
    //   KEY `mdl_graditem_itenee_ix` (`itemtype`,`needsupdate`),
    //   KEY `mdl_graditem_gra_ix` (`gradetype`),
    //   KEY `mdl_graditem_idncou_ix` (`idnumber`,`courseid`),
    //   KEY `mdl_graditem_cou_ix` (`courseid`),
    //   KEY `mdl_graditem_cat_ix` (`categoryid`),
    //   KEY `mdl_graditem_sca_ix` (`scaleid`),
    //   KEY `mdl_graditem_out_ix` (`outcomeid`)
    // ) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COMMENT='This table keeps information about gradeable items (ie colum';
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
