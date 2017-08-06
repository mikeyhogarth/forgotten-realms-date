(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Forgotten Realms Date
 * 
 * Author: Mikey Hogarth on a very slow Saturday evening
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BEGINNING_OF_THE_AGE_OF_THUNDER = -35000;
var MONTHS = __webpack_require__(1);

/** Class representing a date in the Forgotten Realms Dalereckoning (DR) system. */

var ForgottenRealmsDate = function () {

  /**
   * @constructor
   * @param {integer} year 
   * @param {integer} month 
   * @param {integer} day
   */
  function ForgottenRealmsDate() {
    var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : BEGINNING_OF_THE_AGE_OF_THUNDER;
    var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var day = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    _classCallCheck(this, ForgottenRealmsDate);

    this._date = new Date(year, month, day);
  }

  _createClass(ForgottenRealmsDate, [{
    key: 'getYear',
    value: function getYear() {
      return this._date.getFullYear();
    }
  }, {
    key: 'getMonth',
    value: function getMonth() {
      return this._date.getMonth();
    }
  }, {
    key: 'getDay',
    value: function getDay() {
      return this._date.getDate();
    }

    /**
     * getMonthName
     * get this month's name
     * @returns string
     */

  }, {
    key: 'getMonthName',
    value: function getMonthName() {
      return MONTHS[this.getMonth()].name;
    }

    /**
     * getMonthCommonName
     * get this month's common name
     * @returns string
     */

  }, {
    key: 'getMonthCommonName',
    value: function getMonthCommonName() {
      return MONTHS[this.getMonth()].commonName;
    }

    /**
     * toString
     * converts the date to a readable string
     * @returns string
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.getMonthName() + ' ' + this.getDay() + ', ' + this.getYear() + ' DR';
    }

    /**
     * equalTo
     * compares this date to another
     * @param {ForgottenRealmsDate} otherDate - date to compare to
     * @returns boolean - true if otherDate is equal, false otherwise
     */

  }, {
    key: 'equalTo',
    value: function equalTo(otherDate) {
      return otherDate.getDay() === this.getDay() && otherDate.getMonth() === this.getMonth() && otherDate.getYear() === this.getYear();
    }

    /**
     * addDays
     * add some days to this date and return a new date with the result
     * @param {integer} days - days to add
     * @return a new ForgottenRealmsDate object
     */

  }, {
    key: 'addDays',
    value: function addDays() {
      var days = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var date = new Date(this._date);
      date.setDate(date.getDate() + days);
      return new ForgottenRealmsDate(date.getFullYear(), date.getMonth(), date.getDate());
    }

    /**
     * addTendays
     * adds some tendays (weeks, which are 10 days long in DR) to the current date
     * @return a new ForgottenRealmsDate object
     */

  }, {
    key: 'addTendays',
    value: function addTendays() {
      var tendays = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      return this.addDays(10 * tendays);
    }

    /**
     * addYears
     * adds a specified number of years (365 days) to the current date
     * @return a new ForgottenRealmsDate object
     */

  }, {
    key: 'addYears',
    value: function addYears() {
      var years = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      return this.addDays(365 * years);
    }

    /**
     * subtractDays
     * subtract some days to this date and return a new date with the result
     * @param {integer} days - days to subtract
     */

  }, {
    key: 'subtractDays',
    value: function subtractDays() {
      var days = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var date = new Date(this._date);
      date.setDate(date.getDate() - days);
      return new ForgottenRealmsDate(date.getFullYear(), date.getMonth(), date.getDate());
    }

    /**
     * subtractTendays
     * adds some tendays (weeks, which are 10 days long in DR) to the current date
     * @return a new ForgottenRealmsDate object
     */

  }, {
    key: 'subtractTendays',
    value: function subtractTendays() {
      var tendays = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      return this.subtractDays(10 * tendays);
    }

    /**
     * subtractYears
     * subtracts a specified number of years (365 days) to the current date
     * @return a new ForgottenRealmsDate object
     */

  }, {
    key: 'subtractYears',
    value: function subtractYears() {
      var years = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      return new ForgottenRealmsDate(this.getYear() - years, this.getMonth(), this.getDay());
    }
  }]);

  return ForgottenRealmsDate;
}();

module.exports = ForgottenRealmsDate;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = [{"name":"Hammer","commonName":"Deepwinter"},{"name":"Alturiak","commonName":"The Claw of Winter"},{"name":"Ches","commonName":"The Claw of the Sunsets"},{"name":"Tarsakh","commonName":"The Claw of the Storms"},{"name":"Mirtul","commonName":"The Melting"},{"name":"Kythorn","commonName":"The Time of Flowers"},{"name":"Flamerule","commonName":"Summertide"},{"name":"Elesias","commonName":"Highsun"},{"name":"Eleint","commonName":"The Fading"},{"name":"Marpenoth","commonName":"Leaffall"},{"name":"Uktar","commonName":"The Rotting"},{"name":"Nightal","commonName":"The Drawing Down"}]

/***/ })
/******/ ]);
});