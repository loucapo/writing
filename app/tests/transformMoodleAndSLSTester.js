var chai  = require('chai');
chai.should();
// var container = require('../../registry_test')({});
var container = require('./../registry')({});
var SUT = container.getInstanceOf('transformMoodleAndSLS');

describe('TRANSFORM_MOODLE_AND_SLS', () => {
    describe('when_calling_transformCourseFromMoodle_with_no_data', () => {
        beforeEach(() => {
        });

        it('should_return_proper_value', () => {
            var result = SUT.transformCourseFromMoodle([{}]);
            result.should.eql({});
        });
    });

    describe('when_calling_transformCourseFromMoodle_with_just_course_data', () => {
        var course;
        beforeEach(() => {
            course = [{
                "id": 227,
                "category": 2,
                "sortorder": 120004,
                "fullname": "PoB MASTER COURSE",
                "shortname": "PoB MASTER COURSE SHORT NAME",
                "idnumber": "",
                "summary": "",
                "summaryformat": 0,
                "format": "topics",
                "showgrades": 1,
                "newsitems": 0,
                "startdate": 1438041600,
                "marker": 0,
                "maxbytes": 0,
                "legacyfiles": 0,
                "showreports": 0,
                "visible": 1,
                "visibleold": 1,
                "groupmode": 1,
                "groupmodeforce": 0,
                "defaultgroupingid": 0,
                "lang": "",
                "calendartype": "",
                "theme": "",
                "timecreated": 1438088023,
                "timemodified": 1438127224,
                "requested": 0,
                "enablecompletion": 0,
                "completionnotify": 0,
                "cacherev": 1467350338
            }]
        });

        it('should_return_proper_value', () => {
            var result = SUT.transformCourseFromMoodle({course});
            result.id.should.equal(227);
            result.fullname.should.equal("PoB MASTER COURSE");
            result.title.should.equal("PoB MASTER COURSE SHORT NAME");
        });
    });

    describe('when_calling_transformCourseFromMoodle_with_course_and_section_data', () => {
        var course;
        var sections;
        var assignments;
        beforeEach(() => {
            course = [{
                "id": 227,
                "fullname": "PoB MASTER COURSE",
                "shortname": "PoB MASTER COURSE SHORT NAME"
            }];
            sections = [{
                    "id": 2391,
                    "course": 227,
                    "section": 1,
                    "name": "Unit 1: Introduction",
                    "summary": "<p><span style=\"orphans: auto; text-align: start; text-indent: 0px; widows: 1; float: none; display: inline !important;\">How is the complexity of the human body explained by the relatively small number of coding genes? How do memory and intelligence work? These are just a few of the many unanswered questions in the field of biology that will be answered in the not so distant future.</span></p>",
                    "summaryformat": 1,
                    "sequence": "129047,129048,129049,129050,129051,129052,129053,129054,129055",
                    "visible": 1,
                    "availability": null
                },
                {
                    "id": 2392,
                    "course": 227,
                    "section": 2,
                    "name": "Unit 2: Chemistry",
                    "summary": "<span style=\"orphans: auto; text-align: start; text-indent: 0px; widows: 1; float: none; display: inline !important;\">How does water move from roots of a tree up to its leaves? Life is chemistry in action. Understanding chemistry provides the foundation for learning the principles of biology.</span>",
                    "summaryformat": 1,
                    "sequence": "129056,129057,129058,129059,129060,129061,129062,129063,129064,129065,129066,129067,129068,129069,129070,129071,129072,129073,129074,129075,129076,129077,129078,129079,129080,129081,129082",
                    "visible": 1,
                    "availability": null
                },
                {
                    "id": 2393,
                    "course": 227,
                    "section": 3,
                    "name": "Unit 3: Cells",
                    "summary": "<p><span style=\"orphans: auto; text-align: start; text-indent: 0px; widows: 1; float: none; display: inline !important;\">Many researchers seek to answer simple questions about cells. What controls their individual shape? What controls how they divide? Why are they interested in such basic questions? Answers to these will help us make important inroads into understanding and preventing cancer.</span><br></p>",
                    "summaryformat": 1,
                    "sequence": "129083,129084,129085,129086,129087,129088,129089,129090,129091,129092,129093,129094,129095,129096,129097,129098,129099,129100,129101,129102,129103,129104,129105,129106,129107,129108,129109,129110,129111,129112,129113,129114,129115,129116,129117,129118,129119,129120,129121,129122,129123,129124,129125,129126,129127,129128,129129,129130,129131,129132,129133,129134,129135,129136,129137,129138,129139,129140,129141,129142",
                    "visible": 1,
                    "availability": null
                }];
        });

        it('should_return_proper_value', () => {
            var result = SUT.transformCourseFromMoodle({course, sections, assignments});

            result.sections[0].id.should.equal(2391);
            result.sections[0].title.should.equal("Unit 1: Introduction");
            result.sections[0].order.should.equal(1);
            result.sections[0].summary.should.equal("<p><span style=\"orphans: auto; text-align: start; text-indent: 0px; widows: 1; float: none; display: inline !important;\">How is the complexity of the human body explained by the relatively small number of coding genes? How do memory and intelligence work? These are just a few of the many unanswered questions in the field of biology that will be answered in the not so distant future.</span></p>");
            result.sections[0].assignments.should.eql([]);
        });
    });

    describe('when_calling_transformCourseFromMoodle_with_course,_section_and_assignment_data', () => {
        var course;
        var sections;
        var assignments;
        beforeEach(() => {
            course = [{
                "id": 227,
                "fullname": "PoB MASTER COURSE",
                "shortname": "PoB MASTER COURSE SHORT NAME"
            }];
            sections = [{
                "id": 2391,
                "course": 227,
                "section": 1,
                "name": "Unit 1: Introduction",
                "summary": "<p><span style=\"orphans: auto; text-align: start; text-indent: 0px; widows: 1; float: none; display: inline !important;\">How is the complexity of the human body explained by the relatively small number of coding genes? How do memory and intelligence work? These are just a few of the many unanswered questions in the field of biology that will be answered in the not so distant future.</span></p>",
                "summaryformat": 1,
                "sequence": "129047,129048,129049,129050,129051,129052,129053,129054,129055",
                "visible": 1,
                "availability": null
            },
                {
                    "id": 2392,
                    "course": 227,
                    "section": 2,
                    "name": "Unit 2: Chemistry",
                    "summary": "<span style=\"orphans: auto; text-align: start; text-indent: 0px; widows: 1; float: none; display: inline !important;\">How does water move from roots of a tree up to its leaves? Life is chemistry in action. Understanding chemistry provides the foundation for learning the principles of biology.</span>",
                    "summaryformat": 1,
                    "sequence": "129056,129057,129058,129059,129060,129061,129062,129063,129064,129065,129066,129067,129068,129069,129070,129071,129072,129073,129074,129075,129076,129077,129078,129079,129080,129081,129082",
                    "visible": 1,
                    "availability": null
                },
                {
                    "id": 2393,
                    "course": 227,
                    "section": 3,
                    "name": "Unit 3: Cells",
                    "summary": "<p><span style=\"orphans: auto; text-align: start; text-indent: 0px; widows: 1; float: none; display: inline !important;\">Many researchers seek to answer simple questions about cells. What controls their individual shape? What controls how they divide? Why are they interested in such basic questions? Answers to these will help us make important inroads into understanding and preventing cancer.</span><br></p>",
                    "summaryformat": 1,
                    "sequence": "129083,129084,129085,129086,129087,129088,129089,129090,129091,129092,129093,129094,129095,129096,129097,129098,129099,129100,129101,129102,129103,129104,129105,129106,129107,129108,129109,129110,129111,129112,129113,129114,129115,129116,129117,129118,129119,129120,129121,129122,129123,129124,129125,129126,129127,129128,129129,129130,129131,129132,129133,129134,129135,129136,129137,129138,129139,129140,129141,129142",
                    "visible": 1,
                    "availability": null
                }];

            assignments =  [
                {
                    "id": 129047,
                    "sectionId": 2391,
                    "instance": 40277,
                    "name": "Module 1: Evolution and Life on Earth",
                    "json": ""
                },
                {
                    "id": 129050,
                    "sectionId": 2391,
                    "instance": 40278,
                    "name": "Module 2: Energy and Matter",
                    "json": ""
                },
                {
                    "id": 129056,
                    "sectionId": 2392,
                    "instance": 40280,
                    "name": "Module 4: Atoms, Elements, and Matter",
                    "json": ""
                },
                {
                    "id": 129059,
                    "sectionId": 2392,
                    "instance": 40281,
                    "name": "Module 5: Structure of Molecules and Compounds",
                    "json": ""
                }]
        });

        it('should_return_proper_value', () => {
            var result = SUT.transformCourseFromMoodle({course, sections, assignments});

            result.sections[0].id.should.equal(2391);
            result.sections[0].title.should.equal("Unit 1: Introduction");
            result.sections[0].order.should.equal(1);
            result.sections[0].summary.should.equal("<p><span style=\"orphans: auto; text-align: start; text-indent: 0px; widows: 1; float: none; display: inline !important;\">How is the complexity of the human body explained by the relatively small number of coding genes? How do memory and intelligence work? These are just a few of the many unanswered questions in the field of biology that will be answered in the not so distant future.</span></p>");
            result.sections[0].assignments[0].id.should.equal(129047);
            result.sections[0].assignments[0].name.should.equal("Module 1: Evolution and Life on Earth");
            result.sections[0].assignments[0].ltiId.should.equal(40277);
            result.sections[0].assignments[1].id.should.equal(129050);
            result.sections[0].assignments[1].name.should.equal("Module 2: Energy and Matter");
            result.sections[0].assignments[1].ltiId.should.equal(40278);

            result.sections[1].id.should.equal(2392);
            result.sections[1].assignments[0].id.should.equal(129056);
            result.sections[1].assignments[0].name.should.equal("Module 4: Atoms, Elements, and Matter");
            result.sections[1].assignments[0].ltiId.should.equal(40280);
            result.sections[1].assignments[1].id.should.equal(129059);
            result.sections[1].assignments[1].name.should.equal("Module 5: Structure of Molecules and Compounds");
            result.sections[1].assignments[1].ltiId.should.equal(40281);

            result.sections[2].id.should.equal(2393);
            result.sections[2].assignments.should.eql([]);
        });
    });
});



