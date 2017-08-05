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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Forgotten Realms Date
 * 
 * Author: Mikey Hogarth on a very slow Saturday evening
 */

var BEGINNING_OF_THE_AGE_OF_THUNDER = -35000;
var MONTHS = __webpack_require__(1);

module.exports = function () {
  function ForgottenRealmsDate() {
    var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : BEGINNING_OF_THE_AGE_OF_THUNDER;
    var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var day = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    _classCallCheck(this, ForgottenRealmsDate);

    this._day = day;
    this._month = month;
    this._year = year;
  }

  _createClass(ForgottenRealmsDate, [{
    key: 'getYear',
    value: function getYear() {
      return this._year;
    }
  }, {
    key: 'getMonth',
    value: function getMonth() {
      return this._month;
    }
  }, {
    key: 'getDay',
    value: function getDay() {
      return this._day;
    }
  }, {
    key: 'getMonthName',
    value: function getMonthName() {
      return MONTHS[this._month].name;
    }
  }, {
    key: 'getMonthCommonName',
    value: function getMonthCommonName() {
      return MONTHS[this._month].commonName;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.getMonthName() + ' ' + this.getDay() + ', ' + this.getYear() + ' DR';
    }
  }, {
    key: 'equalTo',
    value: function equalTo(otherDate) {
      return otherDate.getDay() === this.getDay() && otherDate.getMonth() === this.getMonth() && otherDate.getYear() === this.getYear();
    }
  }, {
    key: 'addDays',
    value: function addDays(days) {
      return new ForgottenRealmsDate(this.getYear(), this.getMonth(), this.getDay() + days);
    }
  }, {
    key: 'subtractDays',
    value: function subtractDays(days) {
      return new ForgottenRealmsDate(this.getYear(), this.getMonth(), this.getDay() - days);
    }
  }]);

  return ForgottenRealmsDate;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = [{"name":"Hammer","commonName":"Deepwinter"},{"name":"Alturiak","commonName":"The Claw of Winter"},{"name":"Ches","commonName":"The Claw of the Sunsets"},{"name":"Tarsakh","commonName":"The Claw of the Storms"},{"name":"Mirtul","commonName":"The Melting"},{"name":"Kythorn","commonName":"The Time of Flowers"},{"name":"Flamerule","commonName":"Summertide"},{"name":"Elesias","commonName":"Highsun"},{"name":"Eleint","commonName":"The Fading"},{"name":"Marpenoth","commonName":"Leaffall"},{"name":"Uktar","commonName":"The Rotting"},{"name":"Nightal","commonName":"The Drawing Down"}]

/***/ })
/******/ ]);
});