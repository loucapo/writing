/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var testsContext = __webpack_require__(1);

	var runnable = testsContext.keys();

	runnable.forEach(testsContext);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./api/makeRequestTester": 2,
		"./api/makeRequestTester.js": 2,
		"./api/sendGetRequestTester": 3,
		"./api/sendGetRequestTester.js": 3,
		"./components/ChapterTester": 4,
		"./components/ChapterTester.js": 4,
		"./components/ChapterTitleTester": 18,
		"./components/ChapterTitleTester.js": 18,
		"./components/ChaptersTester": 19,
		"./components/ChaptersTester.js": 19,
		"./components/layout/layoutTester": 21,
		"./components/layout/layoutTester.js": 21,
		"./containers/AssignmentsContainerTester": 44,
		"./containers/AssignmentsContainerTester.js": 44,
		"./containers/ChaptersContainerTester": 45,
		"./containers/ChaptersContainerTester.js": 45,
		"./containers/CourseContainerTester": 47,
		"./containers/CourseContainerTester.js": 47,
		"./containers/UpComingAssignmentsContainerTester": 49,
		"./containers/UpComingAssignmentsContainerTester.js": 49,
		"./reducers/chapterReducerTests": 51,
		"./reducers/chapterReducerTests.js": 51
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports) {

	// /**
	//  * Created by rharik on 5/23/16.
	//  */
	//
	// var nock = require('nock');
	// import * as chai from 'chai';
	// chai.should();
	//
	// var makeRequest = require('./../../src/middleware/api/makeRequest').default;
	//
	// describe('MAKE_REQUEST', () => {
	//     describe('when_calling_make_request', () => {
	//
	//         it('should_return_proper_value', (done) => {
	//
	//             var scope = nock('http://localhost:3001/api/')
	//             .get('/test')
	//             .reply(200, { hello: 'WORLD' });
	//
	//             makeRequest('test')
	//                 .then((json) => {
	//                     scope.done();
	//                     json.hello.should.equal('WORLD');
	//                     done();
	//                 })
	//                 .catch(done);
	//         });
	//     });
	// });
	//
	"use strict";

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by rharik on 5/23/16.
	 */
	"use strict";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Chapter = __webpack_require__(6);

	var _Chapter2 = _interopRequireDefault(_Chapter);

	var _ChapterTitle = __webpack_require__(7);

	var _ChapterTitle2 = _interopRequireDefault(_ChapterTitle);

	var _AssignmentsContainer = __webpack_require__(8);

	var _AssignmentsContainer2 = _interopRequireDefault(_AssignmentsContainer);

	var _enzyme = __webpack_require__(16);

	var _chai = __webpack_require__(17);

	var chai = _interopRequireWildcard(_chai);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var should = chai.should();

	describe('CHAPTER_COMPONENT', function () {
	    describe('when_rendering_component_with_isExpanded_equals_false', function () {
	        var props;
	        var SUT;
	        beforeEach(function () {
	            props = { index: 1, title: 'Test Title', summary: 'Great damn chapter!', id: 1, isExpanded: false };
	            SUT = (0, _enzyme.shallow)(_react2.default.createElement(_Chapter2.default, props));
	        });

	        it('should render ChapterTitle component', function () {
	            SUT.find(_ChapterTitle2.default).length.should.equal(1);
	        });

	        it('should not render AssignmentsContainer component', function () {
	            SUT.find(_AssignmentsContainer2.default).length.should.equal(0);
	        });
	    });

	    describe('when_rendering_component_with_isExpanded_equals_true', function () {
	        var props;
	        var SUT;
	        beforeEach(function () {
	            props = { index: 1, title: 'Test Title', summary: 'Great damn chapter!', id: 1, isExpanded: true };
	            SUT = (0, _enzyme.shallow)(_react2.default.createElement(_Chapter2.default, props));
	        });

	        it('should render ChapterTitle component', function () {
	            SUT.find(_ChapterTitle2.default).length.should.equal(1);
	        });

	        it('should render AssignmentsContainer component', function () {
	            SUT.find(_AssignmentsContainer2.default).length.should.equal(1);
	        });
	    });
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _ChapterTitle = __webpack_require__(7);

	var _ChapterTitle2 = _interopRequireDefault(_ChapterTitle);

	var _AssignmentsContainer = __webpack_require__(8);

	var _AssignmentsContainer2 = _interopRequireDefault(_AssignmentsContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Chapter = function Chapter(_ref) {
	    var index = _ref.index;
	    var title = _ref.title;
	    var summary = _ref.summary;
	    var id = _ref.id;
	    var isExpanded = _ref.isExpanded;
	    var toggleChapter = _ref.toggleChapter;
	    return _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(_ChapterTitle2.default, { index: index, title: title, id: id, toggleChapter: toggleChapter }),
	        isExpanded ? _react2.default.createElement(
	            'div',
	            { className: '' },
	            _react2.default.createElement('p', null),
	            _react2.default.createElement(
	                'p',
	                null,
	                summary
	            ),
	            _react2.default.createElement('p', null),
	            _react2.default.createElement(_AssignmentsContainer2.default, { id: id })
	        ) : null
	    );
	};

	Chapter.propTypes = {
	    index: _react.PropTypes.number,
	    title: _react.PropTypes.string,
	    summary: _react.PropTypes.string,
	    id: _react.PropTypes.number,
	    isExpanded: _react.PropTypes.bool,
	    toggleChapter: _react.PropTypes.func
	};

		exports.default = Chapter;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ChapterTitle = function ChapterTitle(_ref) {
	    var isExpanded = _ref.isExpanded;
	    var index = _ref.index;
	    var title = _ref.title;
	    var id = _ref.id;
	    var toggleChapter = _ref.toggleChapter;
	    return _react2.default.createElement(
	        "div",
	        { className: "accord-title" },
	        _react2.default.createElement(
	            "a",
	            { "aria-expanded": isExpanded, onClick: function onClick() {
	                    return toggleChapter(id);
	                } },
	            _react2.default.createElement("div", { className: "accord-toggle" }),
	            _react2.default.createElement(
	                "div",
	                { className: "progress" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "num" },
	                    index
	                ),
	                _react2.default.createElement("i", { className: "icon-icon_down_arrow-0" }),
	                ";"
	            ),
	            _react2.default.createElement(
	                "div",
	                { className: "text" },
	                _react2.default.createElement(
	                    "h3",
	                    null,
	                    title
	                )
	            )
	        )
	    );
	};

	ChapterTitle.propTypes = {
	    isExpanded: _react.PropTypes.bool,
	    index: _react.PropTypes.number,
	    title: _react.PropTypes.string,
	    id: _react.PropTypes.number,
	    toggleChapter: _react.PropTypes.func
	};

		exports.default = ChapterTitle;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Assignments = __webpack_require__(9);

	var _Assignments2 = _interopRequireDefault(_Assignments);

	var _containerFactory = __webpack_require__(13);

	var _containerFactory2 = _interopRequireDefault(_containerFactory);

	var _assignmentsSelector = __webpack_require__(15);

	var _assignmentsSelector2 = _interopRequireDefault(_assignmentsSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = (0, _containerFactory2.default)(['chapters', 'assignments'], _assignmentsSelector2.default)(_Assignments2.default);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Assignment = __webpack_require__(10);

	var _Assignment2 = _interopRequireDefault(_Assignment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Assignments = function Assignments(_ref) {
	    var assignments = _ref.assignments;
	    return _react2.default.createElement(
	        'div',
	        { id: 'assignments' },
	        _react2.default.createElement(
	            'h2',
	            null,
	            'Assignments'
	        ),
	        _react2.default.createElement(
	            'table',
	            {
	                summary: assignments.length > 0 && assignments[0].tableSummary ? assignments[0].tableSummary : 'A list of upcoming course content and assignments'
	            },
	            _react2.default.createElement(
	                'caption',
	                null,
	                assignments.length > 0 && assignments[0].tableCaption ? assignments[0].tableCaption : 'Chapter 1 Assignments'
	            ),
	            _react2.default.createElement(
	                'thead',
	                null,
	                _react2.default.createElement(
	                    'tr',
	                    null,
	                    _react2.default.createElement(
	                        'th',
	                        { className: 'ath-upcoming' },
	                        assignments.length > 0 && assignments[0].isUpcoming ? assignments[0].isUpcoming : 'CONTENT'
	                    ),
	                    _react2.default.createElement('th', { className: 'cth-done' }),
	                    _react2.default.createElement(
	                        'th',
	                        { className: 'ath-status' },
	                        'STATUS'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        { className: 'ath-date' },
	                        'DATE'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        { className: 'ath-points' },
	                        'POINTS'
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'tbody',
	                null,
	                assignments.map(function (assignment) {
	                    return _react2.default.createElement(_Assignment2.default, { key: assignment.id, assignment: assignment });
	                })
	            )
	        )
	    );
	};

	Assignments.propTypes = {
	    assignments: _react.PropTypes.array
	};

		exports.default = Assignments;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(11);

	var _moment2 = _interopRequireDefault(_moment);

	var _AssignmentComplete = __webpack_require__(12);

	var _AssignmentComplete2 = _interopRequireDefault(_AssignmentComplete);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Assignments = function Assignments(_ref) {
	    var assignment = _ref.assignment;
	    return _react2.default.createElement(
	        'tr',
	        { className: 'done' },
	        _react2.default.createElement(
	            'th',
	            { className: 'ctd-title' },
	            _react2.default.createElement(
	                'h4',
	                { role: 'presentation' },
	                _react2.default.createElement(
	                    'a',
	                    { target: '_blank', href: assignment.link },
	                    assignment.name
	                )
	            ),
	            assignment.type
	        ),
	        _react2.default.createElement(_AssignmentComplete2.default, assignment),
	        _react2.default.createElement(
	            'td',
	            null,
	            _react2.default.createElement(
	                'div',
	                { className: 'badge ' + assignment.badge },
	                ' ',
	                assignment.badge,
	                ' '
	            )
	        ),
	        _react2.default.createElement(
	            'td',
	            { className: 'ctd-date' },
	            _moment2.default.unix(assignment.closeDate).format('MMMM Do YYYY, h:mm a')
	        ),
	        !assignment.isUpcoming ? _react2.default.createElement(
	            'td',
	            { className: 'ctd-points' },
	            assignment.pointsEarned,
	            '/',
	            assignment.pointsTotal
	        ) : _react2.default.createElement(
	            'td',
	            { className: 'ctd-points' },
	            assignment.pointsTotal
	        )
	    );
	};

	Assignments.propTypes = {
	    assignment: _react.PropTypes.object
	};

		exports.default = Assignments;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AssignmentComplete = function AssignmentComplete(_ref) {
	    var pointsEarned = _ref.pointsEarned;
	    var isUpcoming = _ref.isUpcoming;

	    var image = pointsEarned > 0 ? _react2.default.createElement("i", { className: "icon-icon_down_arrow-0" }) : _react2.default.createElement("i", { className: "icon-icon_incomplete" });

	    if (isUpcoming) {
	        return _react2.default.createElement("td", { className: "ctd-status" });
	    }
	    return _react2.default.createElement(
	        "td",
	        { className: "ctd-status" },
	        _react2.default.createElement(
	            "div",
	            { className: "complete", role: "img", "aria-label": "Complete" },
	            image
	        )
	    );
	};

	AssignmentComplete.propTypes = {
	    pointsEarned: _react.PropTypes.number,
	    isUpcoming: _react.PropTypes.string
	};

		exports.default = AssignmentComplete;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactRedux = __webpack_require__(14);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * Container:
	                                                                                                                                                                                                                   * takes data from store and applies a transform function to it
	                                                                                                                                                                                                                   * and passes the data to component as props
	                                                                                                                                                                                                                   */

	module.exports = function () {
	    var storeKeys = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var trans = arguments[1];
	    var actions = arguments[2];
	    return function (component) {
	        var transform = trans || function (dataFromStore) {
	            return dataFromStore;
	        };

	        var mapStateToProps = function mapStateToProps(state, ownProps) {
	            var storeDataObjs = storeKeys.map(function (key) {
	                return _defineProperty({}, key, state[key]);
	            });
	            var storeObj = Object.assign.apply(Object, [{}].concat(_toConsumableArray(storeDataObjs)));

	            return transform(storeObj, ownProps);
	        };

	        return (0, _reactRedux.connect)(mapStateToProps, actions)(component);
	    };
		};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (_ref, props) {
	    var chapters = _ref.chapters;
	    var assignments = _ref.assignments;
	    return { assignments: chapters[props.id].assignments.map(function (assId) {
	            return assignments[assId];
	        }) };
		};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("enzyme");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("chai");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _ChapterTitle = __webpack_require__(7);

	var _ChapterTitle2 = _interopRequireDefault(_ChapterTitle);

	var _enzyme = __webpack_require__(16);

	var _chai = __webpack_require__(17);

	var chai = _interopRequireWildcard(_chai);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var should = chai.should();

	describe('CHAPTER__TITLE_COMPONENT', function () {
	    describe('when_rendering_component_with_isExpanded_equals_false', function () {
	        var props;
	        var SUT;
	        beforeEach(function () {
	            props = { index: 1, title: 'Test Title', id: 1, isExpanded: false };
	            SUT = (0, _enzyme.shallow)(_react2.default.createElement(_ChapterTitle2.default, props));
	        });

	        it('should render a DIV with an accord-title className', function () {
	            SUT.find('div.accord-title').length.should.equal(1);
	        });

	        it('should render a DIV with an accord-toggle className', function () {
	            SUT.find('div.accord-toggle').length.should.equal(1);
	        });
	        it('should render one anchor tag with an aria-expanded property with a value of false', function () {
	            SUT.find('a').node.props['aria-expanded'].should.equal(false);
	        });
	    });

	    describe('when_rendering_component_with_isExpanded_equals_true', function () {
	        var props;
	        var SUT;
	        beforeEach(function () {
	            props = { index: 1, title: 'Test Title', id: 1, isExpanded: true };
	            SUT = (0, _enzyme.shallow)(_react2.default.createElement(_ChapterTitle2.default, props));
	        });

	        it('should render a DIV with an accord-title className', function () {
	            SUT.find('div.accord-title').length.should.equal(1);
	        });

	        it('should render a DIV with an accord-toggle className', function () {
	            SUT.find('div.accord-toggle').length.should.equal(1);
	        });
	        it('should render one anchor tag with an aria-expanded property with a value of true', function () {
	            SUT.find('a').node.props['aria-expanded'].should.equal(true);
	        });
	    });
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Chapter = __webpack_require__(6);

	var _Chapter2 = _interopRequireDefault(_Chapter);

	var _Chapters = __webpack_require__(20);

	var _Chapters2 = _interopRequireDefault(_Chapters);

	var _enzyme = __webpack_require__(16);

	var _chai = __webpack_require__(17);

	var chai = _interopRequireWildcard(_chai);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var should = chai.should();

	describe('CHAPTERS_COMPONENT', function () {
	    describe('when_rendering_component', function () {
	        var props;
	        var SUT;
	        beforeEach(function () {
	            props = {
	                chapters: [{
	                    isExpanded: false,
	                    id: 1,
	                    title: 'Experiment 1 - Density',
	                    summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
	                    caption: 'Chapter 1 Content',
	                    tableSummary: 'A list of content and assignments for Chapter 1',
	                    assignments: [1]
	                }, {
	                    isExpanded: false,
	                    id: 2,
	                    title: 'Experiment 2 - Density',
	                    summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
	                    caption: 'Chapter 2 Content',
	                    tableSummary: 'A list of content and assignments for Chapter 2',
	                    assignments: [2]
	                }]
	            };
	            SUT = (0, _enzyme.shallow)(_react2.default.createElement(_Chapters2.default, props));
	        });

	        it('should render a DIV with an id of chapters', function () {
	            var div = SUT.find('div.chapters');
	            div.root.nodes.length.should.equal(1);
	        });

	        it('should render 2 Chapter components', function () {
	            SUT.find(_Chapter2.default).length.should.equal(2);
	        });
	    });
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by rharik on 5/11/16.
	                                                                                                                                                                                                                                                                   */

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Chapter = __webpack_require__(6);

	var _Chapter2 = _interopRequireDefault(_Chapter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Chapters = function Chapters(_ref) {
	    var chapters = _ref.chapters;
	    var toggleChapter = _ref.toggleChapter;
	    return _react2.default.createElement(
	        'div',
	        { id: 'chapters' },
	        _react2.default.createElement(
	            'h2',
	            null,
	            'Chapters'
	        ),
	        _react2.default.createElement(
	            'ul',
	            null,
	            chapters.map(function (chapter, index) {
	                return _react2.default.createElement(_Chapter2.default, _extends({
	                    key: chapter.id,
	                    index: index + 1
	                }, chapter, {
	                    toggleChapter: toggleChapter
	                }));
	            })
	        )
	    );
	};

	Chapters.propTypes = {
	    chapters: _react.PropTypes.array,
	    toggleChapter: _react.PropTypes.func
	};

		exports.default = Chapters;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _layout = __webpack_require__(22);

	var _layout2 = _interopRequireDefault(_layout);

	var _enzyme = __webpack_require__(16);

	var _chai = __webpack_require__(17);

	var chai = _interopRequireWildcard(_chai);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by rharik on 5/20/16.
	 */

	var should = chai.should();

	describe('LAYOUT_COMPONENT', function () {
	    describe('when_rendering_component', function () {
	        var SUT;
	        beforeEach(function () {
	            SUT = (0, _enzyme.shallow)(_react2.default.createElement(_layout2.default, null));
	        });

	        it('should contain div', function () {
	            var result = SUT.find('div');
	            result.should.have.length.of(1);
	        });
	    });
	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _HeaderContainer = __webpack_require__(23);

	var _HeaderContainer2 = _interopRequireDefault(_HeaderContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Layout = function Layout(_ref) {
	    var children = _ref.children;
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_HeaderContainer2.default, null),
	        children
	    );
	};

	Layout.propTypes = {
	    children: _react.PropTypes.object
	};

		exports.default = Layout;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRedux = __webpack_require__(14);

	var _redux = __webpack_require__(24);

	var _index = __webpack_require__(25);

	var _Header = __webpack_require__(39);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function mapStateToProps(state) {
	    return {
	        userName: state.auth.userName,
	        headerMenuCourses: state.headerMenuCourses,
	        headerMenuHelp: state.headerMenuHelp
	    };
	}

	function mapDispatchToProps(dispatch) {
	    return (0, _redux.bindActionCreators)({ onSelectCourseFromMenu: _index.onSelectCourseFromMenu }, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Header2.default);

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getCourse = exports.toggleChapter = undefined;

	var _navigationActions = __webpack_require__(26);

	var _chapterActions = __webpack_require__(38);

	exports.toggleChapter = _chapterActions.toggleChapter;
	exports.getCourse = _navigationActions.getCourse;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getCourse = undefined;

	var _api = __webpack_require__(27);

	var _course = __webpack_require__(36);

	var _constants = __webpack_require__(37);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * Created by rharik on 5/18/16.
	                                                                                                                                                                                                                   */

	// Fetches a page of starred repos by a particular user.
	// Relies on the custom API middleware defined in ../middleware/api.js.
	function getCourse(id) {
	    return _defineProperty({
	        id: id,
	        type: 'apicall'
	    }, _api.CALL_API, {
	        types: [_constants.COURSE_REQUEST, _constants.COURSE_SUCCESS, _constants.COURSE_FAILURE],
	        endpoint: '/course',
	        schema: _course.course,
	        method: 'GET',
	        entityType: 'courses'
	    });
	}

		exports.getCourse = getCourse;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CALL_API = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _sendGetRequest = __webpack_require__(28);

	var _sendGetRequest2 = _interopRequireDefault(_sendGetRequest);

	var _sendPostRequest = __webpack_require__(34);

	var _sendPostRequest2 = _interopRequireDefault(_sendPostRequest);

	var _cache = __webpack_require__(35);

	var _cache2 = _interopRequireDefault(_cache);

	var _bluebird = __webpack_require__(32);

	var _bluebird2 = _interopRequireDefault(_bluebird);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CALL_API = exports.CALL_API = Symbol('Call API');

	exports.default = function (store) {
	    return function (next) {
	        return function (action) {
	            var callAPI = action[CALL_API];
	            var responseAction; // eslint-disable-line no-var
	            // So the middleware doesn't get applied to every single action
	            if (typeof callAPI === 'undefined') {
	                return next(action);
	            }

	            var method = callAPI.method;
	            var entityType = callAPI.entityType;
	            var types = callAPI.types;
	            var authenticated = callAPI.authenticated;

	            var _types = _slicedToArray(types, 2);

	            var requestType = _types[0];
	            var successType = _types[1];


	            var token = localStorage.getItem('id_token') || null;
	            var config = {};

	            if (authenticated) {
	                if (token) {
	                    config = {
	                        headers: { Authorization: 'Bearer ' + token }
	                    };
	                } else {
	                    throw new Error('No token saved!');
	                }
	            }

	            function actionWith(data) {
	                var finalAction = Object.assign({}, action, data);
	                delete finalAction[CALL_API];
	                return finalAction;
	            }
	            // send action to say call pending
	            next(actionWith({ type: requestType }));

	            switch (method) {
	                case 'GET':
	                    {
	                        responseAction = (0, _cache2.default)(store.getState(), entityType, action.id) ? _bluebird2.default.resolve({
	                            entities: { result: [action.id] },
	                            fromCache: true,
	                            type: successType
	                        }) : responseAction = (0, _sendGetRequest2.default)(callAPI, action, config);
	                        break;
	                    }
	                case 'POST':
	                    {
	                        responseAction = (0, _sendPostRequest2.default)(callAPI, action, config);
	                        break;
	                    }
	                default:
	                    {
	                        break;
	                    }
	            }

	            return responseAction.then(function (a) {
	                return next(actionWith(a));
	            });
	        };
	    };
		};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	exports.default = sendGetRequest;

	var _normalizr = __webpack_require__(29);

	var _humps = __webpack_require__(30);

	var _makeRequest = __webpack_require__(31);

	var _makeRequest2 = _interopRequireDefault(_makeRequest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function sendGetRequest(callAPI, action, config) {
	    var endpoint = callAPI.endpoint;
	    var types = callAPI.types;
	    var schema = callAPI.schema;

	    var _types = _slicedToArray(types, 2);

	    var successType = _types[0];
	    var errorType = _types[1];
	    // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
	    // call then return action

	    return (0, _makeRequest2.default)(endpoint, config).then(function (response) {
	        var camelizedJson = (0, _humps.camelizeKeys)(response);

	        return {
	            entities: Object.assign({}, (0, _normalizr.normalize)(camelizedJson, schema)),
	            type: successType
	        };
	    }, function (error) {
	        return {
	            error: error.message || 'There was an error.',
	            type: errorType
	        };
	    });
		}

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("normalizr");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("humps");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = makeRequest;

	var _bluebird = __webpack_require__(32);

	var _bluebird2 = _interopRequireDefault(_bluebird);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var fetch = __webpack_require__(33);

	// pull from config
	/* global fetch*/

	var BASE_URL = 'http://localhost:3001/api/';

	function makeRequest(endpoint, config) {
	    // var _config = Object.assign({}, _config, config);
	    return fetch(BASE_URL + endpoint, config).then(function (_ref) {
	        var response = _ref.response;

	        if (!response.ok) {
	            return _bluebird2.default.reject(response.text);
	        }

	        return response;
	        // eslint-disable-next-line no-console
	    }).catch(function (err) {
	        return console.log(err);
	    });
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("bluebird");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	exports.default = sendPostRequest;

	var _makeRequest = __webpack_require__(31);

	var _makeRequest2 = _interopRequireDefault(_makeRequest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function sendPostRequest(callAPI, action, config) {
	    var endpoint = callAPI.endpoint;
	    var types = callAPI.types;

	    var _types = _slicedToArray(types, 2);

	    var successType = _types[0];
	    var errorType = _types[1];
	    // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
	    // call then return action

	    return (0, _makeRequest2.default)(endpoint, config).then(function (response) {
	        return {
	            // maybe tidy up data here
	            response: response,
	            type: successType
	        };
	    }, function (error) {
	        return {
	            error: error.message || 'There was an error.',
	            type: errorType
	        };
	    });
		}

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// import moment from 'moment';

	var cache = function cache(store, entityType, id) {
	    return !!store[entityType][id];
	};

	exports.default = cache;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.assignment = exports.chapter = exports.course = undefined;

	var _normalizr = __webpack_require__(29);

	var course = new _normalizr.Schema('courses');
	var chapter = new _normalizr.Schema('chapters');
	var assignment = new _normalizr.Schema('assignments');

	course.define({
	    units: (0, _normalizr.arrayOf)(chapter)
	}, { idAttribute: 'm_course_id' });

	chapter.define({
	    activities: (0, _normalizr.arrayOf)(assignment)
	}, { idAttribute: 'section' });

	assignment.define({});

	// function getChapterById(state, id) {
	//     return Object.assign({}, state.chapters[id]);
	// }
	//
	// function getChaptersForCourse(state, courseId) {
	//     return state.courses[courseId].chapters.map(c => getChapterById(state, c));
	// }
	//
	// function getAssignmentsForChapter(state, chapterId) {
	//     return state.chapters[chapterId].assignments.map(a => getAssignmentsById(state, a));
	// }
	//
	// function getAssignmentsById(state, id) {
	//     return state.Assignments[id];
	// }
	//
	// function getCurrentCourse(state) {
	//     var course = Object.assign({}, state.courses[state.currentCourse]);
	//     course.chapters = Object.assign({}, course.chapters.map(c => getChaptersForCourse(c)));
	//     course.chapters.map(c => c.assignments = getAssignmentForChapter(c));
	//     return course;
	// }

	exports.
	// getCurrentCourse,
	course = course;
	exports.chapter = chapter;
	exports.assignment = assignment;

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EXPAND_CHAPTER = exports.EXPAND_CHAPTER = 'EXPAND_CHAPTER';

	var COURSE_REQUEST = exports.COURSE_REQUEST = 'COURSE_REQUEST';
	var COURSE_SUCCESS = exports.COURSE_SUCCESS = 'COURSE_SUCCESS';
	var COURSE_FAILURE = exports.COURSE_FAILURE = 'COURSE_FAILURE';

	var SELECT_COURSE_FROM_MENU = exports.SELECT_COURSE_FROM_MENU = 'SELECT_COURSE_FROM_MENU';

	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'
	// export const COURSE_MENU_HOVER = 'COURSE_MENU_HOVER'

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.toggleChapter = undefined;

	var _constants = __webpack_require__(37);

	var toggleChapter = function toggleChapter(id) {
	    return {
	        type: _constants.EXPAND_CHAPTER,
	        id: id
	    };
	}; /**
	    * Created by rharik on 5/13/16.
	    */

		exports.toggleChapter = toggleChapter;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _HelpMenuButton = __webpack_require__(40);

	var _HelpMenuButton2 = _interopRequireDefault(_HelpMenuButton);

	var _CoursesMenuButton = __webpack_require__(42);

	var _CoursesMenuButton2 = _interopRequireDefault(_CoursesMenuButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import logo from './../../sass/image/logo_ml.png';
	// import avatar from './../../sass/image/avatar.png';

	var Header = function Header(_ref) {
	    var userName = _ref.userName;
	    var headerMenuCourses = _ref.headerMenuCourses;
	    var headerMenuHelp = _ref.headerMenuHelp;
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'header',
	            { role: 'banner', id: 'header' },
	            _react2.default.createElement(
	                'div',
	                { id: 'logo-ml' },
	                _react2.default.createElement('img', { src: logo, alt: 'Macmillan Learning Logo' })
	            ),
	            _react2.default.createElement(
	                'nav',
	                { id: 'header-nav', role: 'navigation' },
	                _react2.default.createElement(_CoursesMenuButton2.default, headerMenuCourses),
	                _react2.default.createElement(_HelpMenuButton2.default, headerMenuHelp),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'nav-profile' },
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        userName
	                    ),
	                    _react2.default.createElement('div', { id: 'avatar' })
	                )
	            ),
	            _react2.default.createElement('input', { type: 'checkbox', id: 'nav-trigger', className: 'nav-trigger', 'aria-hidden': 'true' }),
	            _react2.default.createElement('label', {
	                htmlFor: 'nav-trigger',
	                className: 'icon-icon_hamburger-0'
	            }),
	            _react2.default.createElement('label', { htmlFor: 'nav-trigger', className: 'icon-icon_x-0' }),
	            _react2.default.createElement(
	                'div',
	                { id: 'mobile-nav' },
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement('i', { className: 'icon-icon_book-0' }),
	                        'COURSES'
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement('i', { className: 'icon-icon_help-1' }),
	                        'HELP'
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement('div', { id: 'mobile-avatar' }),
	                        'PROFILE'
	                    )
	                )
	            )
	        )
	    );
	};

	Header.propTypes = {
	    userName: _react.PropTypes.string,
	    headerMenuCourses: _react.PropTypes.object,
	    headerMenuHelp: _react.PropTypes.object
	};

		exports.default = Header;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactAriaMenubutton = __webpack_require__(41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HelpMenuButton = function HelpMenuButton(_ref) {
	    var items = _ref.items;

	    var menuItems = items.map(function (e) {
	        return _react2.default.createElement(
	            _reactAriaMenubutton.MenuItem,
	            { key: e.id, value: e.id },
	            e.name
	        );
	    });

	    return _react2.default.createElement(
	        _reactAriaMenubutton.Wrapper,
	        { className: 'help-menu', onSelection: function onSelection() {} },
	        _react2.default.createElement(
	            _reactAriaMenubutton.Button,
	            null,
	            _react2.default.createElement(
	                'i',
	                { className: 'icon icon-icon_help-white', 'aria-hidden': 'true' },
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    'Help'
	                )
	            )
	        ),
	        _react2.default.createElement(
	            _reactAriaMenubutton.Menu,
	            null,
	            menuItems
	        )
	    );
	};

	HelpMenuButton.propTypes = {
	    items: _react.PropTypes.array
	};

		exports.default = HelpMenuButton;

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("react-aria-menubutton");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactAriaMenubutton = __webpack_require__(41);

	var _reactRouter = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CourseMenuButton = function CourseMenuButton(_ref) {
	    var items = _ref.items;

	    var menuItems = items.map(function (e) {
	        return _react2.default.createElement(
	            _reactAriaMenubutton.MenuItem,
	            { key: e.id, value: e.id },
	            _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/course/' + e.id },
	                e.name
	            )
	        );
	    });

	    return _react2.default.createElement(
	        _reactAriaMenubutton.Wrapper,
	        { className: 'courses-menu', onSelection: function onSelection() {} },
	        _react2.default.createElement(
	            _reactAriaMenubutton.Button,
	            null,
	            'Courses',
	            _react2.default.createElement('i', { className: 'icon icon-icon_down_arrow-0', 'aria-hidden': 'true' })
	        ),
	        _react2.default.createElement(
	            _reactAriaMenubutton.Menu,
	            null,
	            menuItems,
	            _react2.default.createElement(
	                _reactAriaMenubutton.MenuItem,
	                { value: '' },
	                _react2.default.createElement(
	                    'span',
	                    { 'aria-hidden': 'true' },
	                    '+'
	                ),
	                ' Add A Course'
	            )
	        )
	    );
	};

	CourseMenuButton.propTypes = {
	    items: _react.PropTypes.array
	};

		exports.default = CourseMenuButton;

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _assignmentsSelector = __webpack_require__(15);

	var _assignmentsSelector2 = _interopRequireDefault(_assignmentsSelector);

	var _chai = __webpack_require__(17);

	var chai = _interopRequireWildcard(_chai);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by rharik on 5/20/16.
	 */

	chai.should();

	describe('ASSIGNMENT_CONTAINER', function () {
	    describe('when_calling_transform', function () {
	        var _props;
	        var _initialState;
	        beforeEach(function () {
	            _initialState = {
	                chapters: {
	                    1: {
	                        isExpanded: false,
	                        id: 1,
	                        title: 'Experiment 1 - Density',
	                        summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
	                        caption: 'Chapter 1 Content',
	                        tableSummary: 'A list of content and assignments for Chapter 1',
	                        assignments: [1]
	                    },

	                    2: {
	                        isExpanded: false,
	                        id: 2,
	                        title: 'Experiment 2 - Density',
	                        summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
	                        caption: 'Chapter 2 Content',
	                        tableSummary: 'A list of content and assignments for Chapter 2',
	                        assignments: [2]
	                    }
	                },
	                assignments: {
	                    1: {
	                        id: 1,
	                        link: 'https://hm-staging.mnv-tech.com/mod/lti/view.php?id=7778"',
	                        name: 'Chemical Reactions Pre-Lab Assignment',
	                        badge: 'TO DO',
	                        openDate: 1460987807,
	                        closeDate: 1461600000,
	                        pointsEarned: 3,
	                        pointsTotal: 300,
	                        type: 'Assesment'
	                    },
	                    2: {
	                        id: 2,
	                        link: 'https://hm-staging.mnv-tech.com/mod/lti/view.php?id=7778"',
	                        name: 'Chemical Reactions Pre-Lab Assignment',
	                        badge: 'TO DO',
	                        openDate: 1460987807,
	                        closeDate: 1461600000,
	                        pointsEarned: 3,
	                        pointsTotal: 300,
	                        type: 'Assesment'
	                    }
	                }
	            };
	            _props = {
	                id: 1
	            };
	        });

	        it('should_return_proper_value', function () {
	            var state = {
	                chapters: _initialState.chapters,
	                assignments: _initialState.assignments
	            };
	            var newState = (0, _assignmentsSelector2.default)(state, _props);
	            newState.assignments.length.should.equal(1);
	            newState.assignments[0].id.should.equal(1);
	        });
	    });
	});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _chaptersSelector = __webpack_require__(46);

	var _chaptersSelector2 = _interopRequireDefault(_chaptersSelector);

	var _chai = __webpack_require__(17);

	var chai = _interopRequireWildcard(_chai);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by rharik on 5/26/16.
	 */

	var should = chai.should();

	describe('CHAPTER_CONTAINER_TRANSFORM', function () {
	    describe('when_calling_transform', function () {
	        var props;
	        beforeEach(function () {
	            props = {
	                courses: {
	                    1: {
	                        lastUpdated: '',
	                        id: 1,
	                        courseTitle: 'General Chemistry Laboratory - 6660',
	                        active: true,
	                        chapters: [1]
	                    },
	                    2: {
	                        lastUpdated: '',
	                        id: 2,
	                        courseTitle: 'General Chemistry Laboratory - 1331',
	                        active: true,
	                        chapters: [2]
	                    }
	                },
	                chapters: {
	                    1: {
	                        isExpanded: false,
	                        id: 1,
	                        title: 'Experiment 1 - Density',
	                        summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
	                        caption: 'Chapter 1 Content',
	                        tableSummary: 'A list of content and assignments for Chapter 1',
	                        assignments: [1]
	                    },

	                    2: {
	                        isExpanded: false,
	                        id: 2,
	                        title: 'Experiment 2 - Density',
	                        summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
	                        caption: 'Chapter 2 Content',
	                        tableSummary: 'A list of content and assignments for Chapter 2',
	                        assignments: [2]
	                    }
	                },
	                currentCourse: 1
	            };
	        });

	        it('should not return null', function () {
	            (0, _chaptersSelector2.default)(props).should.not.be.null;
	        });

	        it('should return a valid object with chapters property', function () {
	            (0, _chaptersSelector2.default)(props).chapters.should.not.be.undefined;
	        });

	        it('should return a chapters property with an array length of 1', function () {
	            (0, _chaptersSelector2.default)(props).chapters.length.should.equal(1);
	        });

	        it('should return the proper chapter ID for the current course', function () {
	            (0, _chaptersSelector2.default)(props).chapters[0].id.should.equal(1);
	        });
	    });

	    describe('when_calling_transform_on_course_with_no_chapters', function () {
	        var props;
	        beforeEach(function () {
	            props = {
	                courses: {
	                    1: {
	                        lastUpdated: '',
	                        id: 1,
	                        courseTitle: 'General Chemistry Laboratory - 6660',
	                        active: true,
	                        chapters: []
	                    }
	                },
	                chapters: {},
	                currentCourse: 1
	            };
	        });

	        it('should not return null', function () {
	            (0, _chaptersSelector2.default)(props).should.not.be.null;
	        });

	        it('should return a valid object with chapters property', function () {
	            (0, _chaptersSelector2.default)(props).chapters.should.not.be.undefined;
	        });

	        it('should return a chapters property with an array length of 0', function () {
	            (0, _chaptersSelector2.default)(props).chapters.length.should.equal(0);
	        });
	    });

	    describe('when_calling_transform_where_current_course_does_not_exist', function () {
	        var props;
	        beforeEach(function () {
	            props = {
	                courses: {
	                    1: {
	                        lastUpdated: '',
	                        id: 1,
	                        courseTitle: 'General Chemistry Laboratory - 6660',
	                        active: true,
	                        chapters: []
	                    }
	                },
	                chapters: {},
	                currentCourse: 1
	            };
	        });

	        it('should not return null', function () {
	            (0, _chaptersSelector2.default)(props).should.not.be.null;
	        });

	        it('should return a valid object with chapters property', function () {
	            (0, _chaptersSelector2.default)(props).chapters.should.not.be.undefined;
	        });

	        it('should return a chapters property with an array length of 0', function () {
	            (0, _chaptersSelector2.default)(props).chapters.length.should.equal(0);
	        });
	    });
		});

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (_ref) {
	    var courses = _ref.courses;
	    var currentCourse = _ref.currentCourse;
	    var chapters = _ref.chapters;
	    return { chapters: courses[currentCourse].chapters.map(function (chapterId) {
	            return chapters[chapterId];
	        }) };
		};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _courseSelector = __webpack_require__(48);

	var _courseSelector2 = _interopRequireDefault(_courseSelector);

	var _chai = __webpack_require__(17);

	var chai = _interopRequireWildcard(_chai);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by rharik on 5/26/16.
	 */

	var should = chai.should();

	describe('COURSE_CONTAINER_TRANSFORM', function () {
	    describe('when_calling_transform', function () {
	        var props;
	        beforeEach(function () {
	            props = {
	                courses: {
	                    1: {
	                        lastUpdated: '',
	                        id: 1,
	                        courseTitle: 'General Chemistry Laboratory - 6660',
	                        active: true,
	                        chapters: []
	                    }
	                },
	                chapters: {},
	                currentCourse: 1
	            };
	        });

	        it('should not return null', function () {
	            (0, _courseSelector2.default)(props).should.not.be.null;
	        });

	        it('should return an object with a course with proper ID', function () {
	            (0, _courseSelector2.default)(props).id.should.equal(1);
	        });
	    });
	});

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var courses = _ref.courses;
	  var currentCourse = _ref.currentCourse;
	  return courses[currentCourse];
		};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _upcomingAssignmentsSelector = __webpack_require__(50);

	var _upcomingAssignmentsSelector2 = _interopRequireDefault(_upcomingAssignmentsSelector);

	var _moment = __webpack_require__(11);

	var _moment2 = _interopRequireDefault(_moment);

	var _chai = __webpack_require__(17);

	var chai = _interopRequireWildcard(_chai);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var should = chai.should(); /**
	                             * Created by rharik on 5/26/16.
	                             */


	describe('UP_COMING_ASSIGNMENTS_CONTAINER_TRANSFORM', function () {
	    describe('when_calling_transform', function () {
	        var props;
	        beforeEach(function () {
	            props = {
	                currentCourse: 1,
	                courses: {
	                    1: {
	                        lastUpdated: '',
	                        id: 1,
	                        courseTitle: 'General Chemistry Laboratory - 6660',
	                        active: true,
	                        chapters: [1]
	                    },
	                    2: {
	                        lastUpdated: '',
	                        id: 2,
	                        courseTitle: 'General Chemistry Laboratory - 1331',
	                        active: true,
	                        chapters: [2]
	                    }
	                },
	                chapters: {
	                    1: {
	                        isExpanded: false,
	                        id: 1,
	                        title: 'Experiment 1 - Density',
	                        summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
	                        caption: 'Chapter 1 Content',
	                        tableSummary: 'A list of content and assignments for Chapter 1',
	                        assignments: [1, 2]
	                    },

	                    2: {
	                        isExpanded: false,
	                        id: 2,
	                        title: 'Experiment 2 - Density',
	                        summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
	                        caption: 'Chapter 2 Content',
	                        tableSummary: 'A list of content and assignments for Chapter 2',
	                        assignments: [2]
	                    }
	                },
	                assignments: {
	                    1: {
	                        id: 1,
	                        link: 'https://hm-staging.mnv-tech.com/mod/lti/view.php?id=7778"',
	                        name: 'Chemical Reactions Pre-Lab Assignment',
	                        badge: 'TO DO',
	                        openDate: 1460987807,
	                        closeDate: (0, _moment2.default)().add(2, 'days').unix(),
	                        pointsEarned: 3,
	                        pointsTotal: 300,
	                        type: 'Assesment'
	                    },
	                    2: {
	                        id: 2,
	                        link: 'https://hm-staging.mnv-tech.com/mod/lti/view.php?id=7778"',
	                        name: 'Chemical Reactions Pre-Lab Assignment',
	                        badge: 'TO DO',
	                        openDate: 1460987807,
	                        closeDate: (0, _moment2.default)().subtract(2, 'days').unix(),
	                        pointsEarned: 3,
	                        pointsTotal: 300,
	                        type: 'Assesment'
	                    }
	                }
	            };
	        });

	        it('should not return null', function () {
	            (0, _upcomingAssignmentsSelector2.default)(props).should.not.be.null;
	        });

	        it('should return a valid object with assignments property', function () {
	            (0, _upcomingAssignmentsSelector2.default)(props).assignments.should.not.be.undefined;
	        });

	        it('should return only upcoming assignments', function () {
	            (0, _upcomingAssignmentsSelector2.default)(props).assignments.length.should.equal(1);
	        });
	    });
	});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _moment = __webpack_require__(11);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var courses = _ref.courses;
	    var currentCourse = _ref.currentCourse;
	    var chapters = _ref.chapters;
	    var assignments = _ref.assignments;

	    var course = courses[currentCourse];
	    var filter = function filter(a) {
	        return _moment2.default.unix(a.closeDate) < (0, _moment2.default)() && a.badge === 'TO DO' ? a : null;
	    };

	    var allAssIds = course.chapters.map(function (chapterId) {
	        return chapters[chapterId];
	    }).map(function (chap) {
	        return chap.assignments;
	    }).reduce(function (a, b) {
	        return a.concat(b);
	    }, []);

	    var upCommingAssignments = allAssIds.map(function (id) {
	        return assignments[id];
	    }).filter(filter).map(function (ass) {
	        return _extends({}, ass, {
	            isUpcoming: 'UPCOMING',
	            tableSummary: 'A list of upcoming course content and assigments',
	            tableCaption: 'Upcoming Assignments'
	        });
	    });

	    return { assignments: upCommingAssignments };
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _constants = __webpack_require__(37);

	var _chapterReducers = __webpack_require__(52);

	var _chai = __webpack_require__(17);

	var chai = _interopRequireWildcard(_chai);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var should = chai.should(); /**
	                             * Cre`ated by rharik on 5/19/16.
	                             */

	describe('CHAPTER_REDUCERS', function () {
	    describe('when_calling_expand_chapter', function () {
	        var _action;
	        var _initialState;
	        beforeEach(function () {
	            _initialState = {
	                1: {
	                    isExpanded: false,
	                    id: 1,
	                    title: 'Experiment 1 - Density',
	                    summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
	                    caption: 'Chapter 1 Content',
	                    tableSummary: 'A list of content and assignments for Chapter 1',
	                    assignments: [1]
	                }
	            };
	            _action = {
	                type: _constants.EXPAND_CHAPTER,
	                id: 1
	            };
	        });

	        it('should_return_chapter_state', function () {
	            var newState = (0, _chapterReducers.expandChapter)(_initialState, _action);
	            newState.should.not.be.null;
	        });

	        it('should_toggle_isExpanded', function () {
	            var newState = (0, _chapterReducers.expandChapter)(_initialState, _action);
	            newState[1].isExpanded.should.be.true;
	        });
	    });
	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.expandChapter = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by rharik on 5/13/16.
	                                                                                                                                                                                                                                                                   */


	var _constants = __webpack_require__(37);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var expandChapter = function expandChapter() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    if (action.type === _constants.EXPAND_CHAPTER) {
	        var item = state[action.id];
	        return _extends({}, state, _defineProperty({}, action.id, _extends({}, item, { isExpanded: !item.isExpanded })));
	    }
	    return state;
	};

		exports.expandChapter = expandChapter;

/***/ }
/******/ ]);
//# sourceMappingURL=b4342d5d652ed6c4a79cd13d56fde9f8-output.js.map