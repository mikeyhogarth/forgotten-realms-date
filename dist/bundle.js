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
 * Author: Mikey Hogarth
 */


var MONTHS = __webpack_require__(1);

/** 
 * Function for converting a date into the Forgotten Realms Dalereckoning (DR) system. 
 * @param date {Date} a javascript date object
 * @param opts {Object} options
 * 
 * Available Options
 * 
 * useCommonName: {boolean} if true, the month's common name will be used.
*/
var fn = function fn(date) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var nameType = opts.useCommonName ? 'commonName' : 'name';
  return MONTHS[date.getMonth()][nameType] + ' ' + date.getDate() + ', ' + date.getFullYear() + ' DR';
};

module.exports = fn;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = [{"name":"Hammer","commonName":"Deepwinter"},{"name":"Alturiak","commonName":"The Claw of Winter"},{"name":"Ches","commonName":"The Claw of the Sunsets"},{"name":"Tarsakh","commonName":"The Claw of the Storms"},{"name":"Mirtul","commonName":"The Melting"},{"name":"Kythorn","commonName":"The Time of Flowers"},{"name":"Flamerule","commonName":"Summertide"},{"name":"Elesias","commonName":"Highsun"},{"name":"Eleint","commonName":"The Fading"},{"name":"Marpenoth","commonName":"Leaffall"},{"name":"Uktar","commonName":"The Rotting"},{"name":"Nightal","commonName":"The Drawing Down"}]

/***/ })
/******/ ]);
});