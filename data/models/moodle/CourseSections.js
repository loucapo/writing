module.exports = function(sequelize, Sequelize) {
  return sequelize.define('mdl_course_sections', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    course: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    section: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    name: {
      type: Sequelize.STRING(255),
      //DEFAULT NULL
    },
    summary: {
      type: Sequelize.TEXT
    },
    summaryformat: {
      type: Sequelize.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    sequence: {
      type: Sequelize.TEXT
    },
    visible: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    availability: {
      type: Sequelize.TEXT
    }
    //   PRIMARY KEY (`id`),
    //   UNIQUE KEY `mdl_coursect_cousec_uix` (`course`,`section`)
    // ) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8 COMMENT='to define the sections for each course';
  });
};
