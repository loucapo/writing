module.exports = function(sequelize, Sequelize) {
  return sequelize.define('mdl_user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    auth: {
      type: Sequelize.STRING(20),
      defaultValue: 'manual',
      allowNull: false
    },
    confirmed: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: false
    },
    policyagreed: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: false
    },
    deleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: false
    },
    suspended: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: false
    },
    mnethostid: {
      type: Sequelize.INTEGER(10),
      defaultValue: 0,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    idnumber: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    firstname: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    emailstop: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: false
    },
    icq: {
      type: Sequelize.STRING(15),
      allowNull: false
    },
    skype: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    yahoo: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    aim: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    msn: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    phone1: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    phone2: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    institution: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    department: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    address: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    city: {
      type: Sequelize.STRING(120),
      allowNull: false
    },
    country: {
      type: Sequelize.STRING(2),
      allowNull: false
    },
    lang: {
      type: Sequelize.STRING(30),
      defaultValue: 'en',
      allowNull: false
    },
    calendartype: {
      type: Sequelize.STRING(30),
      defaultValue: 'gregorian',
      allowNull: false
    },
    theme: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    timezone: {
      type: Sequelize.STRING(100),
      defaultValue: '99',
      allowNull: false
    },
    firstaccess: {
      type: Sequelize.INTEGER(10),
      defaultValue: 0,
      allowNull: false
    },
    lastaccess: {
      type: Sequelize.INTEGER(10),
      defaultValue: 0,
      allowNull: false
    },
    lastlogin: {
      type: Sequelize.INTEGER(10),
      defaultValue: 0,
      allowNull: false
    },
    currentlogin: {
      type: Sequelize.INTEGER(10),
      defaultValue: 0,
      allowNull: false
    },
    lastip: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    secret: {
      type: Sequelize.STRING(15),
      allowNull: false
    },
    picture: {
      type: Sequelize.INTEGER(10),
      defaultValue: 0,
      allowNull: false
    },
    url: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    descriptionformat: {
      type: Sequelize.INTEGER(2),
      defaultValue: 1,
      allowNull: false
    },
    mailformat: {
      type: Sequelize.BOOLEAN,
      defaultValue: 1,
      allowNull: false
    },
    maildigest: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: false
    },
    maildisplay: {
      type: Sequelize.INTEGER(2),
      defaultValue: 2,
      allowNull: false
    },
    autosubscribe: {
      type: Sequelize.BOOLEAN,
      defaultValue: 1,
      allowNull: false
    },
    trackforums: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: false
    },
    timecreated: {
      type: Sequelize.INTEGER(10),
      defaultValue: 0,
      allowNull: false
    },
    timemodified: {
      type: Sequelize.INTEGER(10),
      defaultValue: 0,
      allowNull: false
    },
    trustbitmask: {
      type: Sequelize.INTEGER(10),
      defaultValue: 0,
      allowNull: false
    },
    imagealt: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    lastnamephonetic: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    firstnamephonetic: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    middlename: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    alternatename: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
    // thus far unused, might need to be revisited for associations, validations, whatever
    //   UNIQUE KEY `mdl_user_mneuse_uix` (`mnethostid`,`username`)
    ,
    //   KEY `mdl_user_del_ix` (`deleted`),
    //   KEY `mdl_user_con_ix` (`confirmed`),
    //   KEY `mdl_user_fir_ix` (`firstname`),
    //   KEY `mdl_user_las_ix` (`lastname`),
    //   KEY `mdl_user_cit_ix` (`city`),
    //   KEY `mdl_user_cou_ix` (`country`),
    //   KEY `mdl_user_las2_ix` (`lastaccess`),
    //   KEY `mdl_user_ema_ix` (`email`),
    //   KEY `mdl_user_aut_ix` (`auth`),
    //   KEY `mdl_user_idn_ix` (`idnumber`),
    //   KEY `mdl_user_fir2_ix` (`firstnamephonetic`),
    //   KEY `mdl_user_las3_ix` (`lastnamephonetic`),
    //   KEY `mdl_user_mid_ix` (`middlename`),
    //   KEY `mdl_user_alt_ix` (`alternatename`)
    // ) ENGINE=InnoDB AUTO_INCREMENT=327 DEFAULT CHARSET=utf8 COMMENT='One record for each person';
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
};
