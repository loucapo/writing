/*global require, module, console*/
var Chance = require('chance');
var chance = new Chance();
var _ = require('lodash');
var mo = require('moment');

var Templates = {};

Templates.CourseSections = {
  required: {
    // course+section must be unique on insert.
    // so basically, never use just the required template, and/or make sure you change it before your next insert
    course: '10000'
  },

  basic: function(h) {
    var course = chance.integer({min: 1});
    var section = chance.integer({min: 1});
    var opts = {
      course: course,
      section: section
    };
    return opts;
  }
};

Templates.User = {
  basic: function(h) {
    var first = chance.first();
    var last = chance.last();
    // users are largely functional with mixed case names, but there are a few places in moodle that
    // validate the username and bomb out if they aren't strictly lowercase.
    var username = (first + '.' + last).toLowerCase();
    var email = first + '.' + last + '@example.com';
    var opts = {
      username: username,
      firstname: first,
      lastname: last,
      email: email
    };
    return opts;
  },

  required: {
    username: 'default',
    password: '$2y$10$7ISM9C38rTH0HocZjG7TW.QYYk2jzv4pviwiFiv5Vvxs8ZfmngtQ.', //Password123!
    firstname: 'default',
    lastname: 'default',
    email: 'default@example.com',
    confirmed: 1,
    mnethostid: 1,
    icq: '',
    msn: '',
    skype: '',
    yahoo: '',
    aim: '',
    phone1: '',
    phone2: '',
    institution: '',
    department: '',
    address: '',
    city: '',
    country: '',
    theme: '',
    lastip: '',
    secret: '',
    url: '',
    idnumber: ''
  },

  suspended: function(h) {
    var opts = {
      suspended: 1
    };
    return opts;
  },

  deleted: function(h) {
    var opts = {
      deleted: 1
    };
    return opts;
  },

  withEmail: function(email) {
    return {email : email};
  },

  withUsername: function(username) {
    return {username: username};
  },
};

Templates.LTI = {
  required: {
    course: '0', //not generally where we want things, but maybe sometimes, and should be safe regardless.
    //Just remember to change it for a particular course if need be.
    name: '',
    introformat: '0',
    timecreated: '0',
    timemodified: '0',
    toolurl: 'http://BAD-LTI-URL',
    grade: '0',
    launchcontainer: '1',
    debuglaunch: '0',
    showtitlelaunch: '0',
    showdescriptionlaunch: '0'
  },

  basic: function(hash) {
    var name = chance.sentence({words: 3});
    var now = mo().unix();
    var tooluri = chance.url();
    var opts = {
      toolurl: tooluri,
      name: name,
      timecreated: now,
      timemodified: now
    };
    return opts;
  }
};

Templates.CourseModules = {
  // > INSERT INTO `mdl_course_modules` VALUES (10,11,14,13,69,'',1433963981,0,0,1,1,0,0,0,NULL,0,0,0,NULL);
  basic: function(h) {
    var availability = chance.sentence({words: 5});
    var now = mo().unix();
    var opts = {
      availability: availability,
      added: now
    };
    return opts;
  },
  required: {
    //
  }
};
Templates.Enrolment = {
  required: {
    // while technically the only thing required that does not have a default
    // 0 is rarely what you will actually want.  ensure this is updated to the proper courseid before use.
    courseid: 0
  },

  basic: function(h) {
    var now = mo().unix();
    var opts = {
      enrol: 'manual',
      //enrol: 'self',
      status: 0,
      courseid: chance.integer({max: 20000, min: 10000}),
      sortorder: 0,
      enrolperiod: 0,
      enrolstartdate: 0,
      enrolenddate: 0,
      expirynotify: 0,
      enpirythreshold: '86400',
      notifyall: 0,
      roleid: '5',
      timecreated: now,
      timemodified: now
    };
    return opts;
  },

  forCourse: function(course) {
    return {courseid: course};
  },

  //demo
  // enrollater: function(date) {
  //   return {enrolstartdate: 70000,
  //           enrolenddate: date};
  // }
};

Templates.UserEnrolment = {
  required: function() {
    //TODO: fix later.  just call things in the proper order, with the previous ids.
    // TODO: still need this?  like this?  is it even accurate?
    // this is not what you ever want finally, but you need to create unique ones, often before you know where to attach them.
    var e = chance.integer({min: 10000, max: 20000});
    var u = chance.integer({min: 10000, max: 20000});
    var opts = {
      enrolid: e,
      userid: u
    };
    return opts;
  },
  basic: function(h) {
    var now = mo().unix();
    var opts = {
      status: '0',
      enrolid: h.enrolid,
      userid: h.userid,
      timestart: now,
      timeend: 0,
      modifierid: 2, // what is this even?
      timecreated: now,
      timemodified: now
    };
    return _.merge({}, h, opts);
  }
};

Templates.Context = {
  // define('CONTEXT_SYSTEM', 10);
  // define('CONTEXT_USER', 30);
  // define('CONTEXT_COURSECAT', 40);
  // define('CONTEXT_COURSE', 50);
  // define('CONTEXT_MODULE', 70);
  // define('CONTEXT_BLOCK', 80);
  simpleCourse: function(cid) {
    return {
      contextlevel: 50,
      instanceid: cid,
      depth: 2,
    };
  },
  // required is necessary, but not actually usable
  required: {},
  simpleAssign: function(cid) {
    return {
      contextlevel: 70,
      instanceid: cid,
      depth: 3 // this is naive and assumes all assignments are top level in a top level course, but good enough for now
    }
  }
};

Templates.GradeGrade = {
  required: {},
  basic: function(h) {
    var opts = {
      itemid: 0,
      userid: 0 ,
      usermodified: 0 ,
      finalgrade: 0,
      overridden: mo().unix(),
      timemodified: mo().unix(),
      aggregationstatus: 'used',
      aggregationweight: 1.00000

    };
    var x = _.merge({}, opts, h);
    return x;
  }
};

Templates.GradeCategory = {
  required: {},
  basic: function(given) {
    var now = mo().unix();
    var defaults = {
      courseid: '0', // needs to be given one to not conflict
      fullname: 'fuckboy',
      timecreated: now.toString(),
      timemodified: now.toString(),
    };
    var x = _.merge({}, defaults, given);
    console.log(x);
    return x;
  }
};

Templates.GradeItem = {
  basic: function(h) {
    var opts = {
      courseid: h.courseid,
      categoryid: 1,
      itemtype: 'mod',
      itemmodule: 'assign',
      itemname: chance.word(),
    };
    return _.merge({}, h, opts);
  },
  required: {},
};

Templates.Assign = {
  required: {},
  basic: function(h) {
    var opts = {
      course: 0, //you will have trouble actually writing to db if you haven't overwritten this...
      duedate: mo().unix() + 165000,
      allowsubmissionsfromdate: mo().unix() - 86400,
      timemodified: mo().unix(),
      name: chance.word(),
      intro: chance.sentence({words: 5}),
      introformat: 1,
      alwaysshowdescription: 1,
      grade: 100
    };
    //console.log(opts);
    return _.merge({}, h, opts);
    //return opts;
  }
};

Templates.RoleAssignment = {
  basic: function(h) {
    var opts = {
      roleid: h.roleid,
      contextid: h.contextid,
      timemodified: mo().unix(),
      userid: h.userid
    };
    return opts;
  },
  required: {}
};

Templates.Course = {
  basic: function(h) {
    var fullname = '';
    do { //re-gen if it's longer than the column limit
      fullname = chance.sentence({words: 5});
    } while (fullname.length > 254);
    var shortname = chance.word();
    var now = mo().unix();
    var inAFew = mo().unix() + 300; //without close inspection, this seems to be roughly what moodle does
    var opts = {
      fullname: fullname,
      shortname: shortname,
      startdate: inAFew,
      timecreated: now,
      timemodified: now,
      cacherev: now
    };
    return opts;
  },

  startsInAWeek: function(h) {
    h = this.basic(h);
    var later = mo().unix() + (60 * 60 * 24 * 7);
    var opts = {
      startdate: later
    };
    return opts;
  },

  required: {
    category: 1,
    sortorder: 10001,
    fullname: 'default',
    shortname: 'default',
    idnumber: '',
    summary: '',
    summaryformat: 1,
    format: 'weeks',
    showgrades: 1,
    newsitems: '5',
    startdate: '1433894400',
    marker: 0,
    maxbytes: 0,
    legacyfiles: 0,
    showreports: 0,
    visible: 1,
    visibleold: 1,
    groupmode: 0,
    groupmodeforce: 0,
    defaultgroupingid: 0,
    lang: '',
    calendartype: '',
    theme: '',
    timecreated: '1433872499',
    timemodified: '1433872499',
    requested: 0,
    enablecompletion: 0,
    completionnotify: 0,
    cacherev: '1433872499'
  }
};

Templates.Group = {
  required: {},
  basic: function(h) {

  }
};

Templates.GroupMember = {
  required: {},
  basic: function(h) {

  }
};

module.exports = Templates;
