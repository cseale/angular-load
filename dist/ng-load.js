(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["ng-load"] = factory(require("angular"));
	else
		root["ng-load"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _angular = __webpack_require__(2);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('angularLoad', []).service('angularLoad', ['$document', '$q', '$timeout', function ($document, $q, $timeout) {
	var document = $document[0];
	var promises = {};

	function loader(createElement) {
		return function (url) {
			if (typeof promises[url] === 'undefined') {
				var deferred = $q.defer();
				var element = createElement(url);

				element.onload = element.onreadystatechange = function (e) {
					if (element.readyState && element.readyState !== 'complete' && element.readyState !== 'loaded') {
						return;
					}

					$timeout(function () {
						deferred.resolve(e);
					});
				};
				element.onerror = function (e) {
					$timeout(function () {
						deferred.reject(e);
					});
				};

				promises[url] = deferred.promise;
			}

			return promises[url];
		};
	}

	/**
  * Dynamically loads the given script
  * @param src The url of the script to load dynamically
  * @returns {*} Promise that will be resolved once the script has been loaded.
  */
	this.loadScript = loader(function (src) {
		var script = document.createElement('script');

		script.src = src;

		document.body.appendChild(script);
		return script;
	});

	/**
  * Dynamically loads the given CSS file
  * @param href The url of the CSS to load dynamically
  * @returns {*} Promise that will be resolved once the CSS file has been loaded.
  */
	this.loadCSS = loader(function (href) {
		var style = document.createElement('link');

		style.rel = 'stylesheet';
		style.type = 'text/css';
		style.href = href;

		document.head.appendChild(style);
		return style;
	});

	/**
  * Dynamically unloads the given CSS file
  * @param href The url of the CSS to unload dynamically
  * @returns boolean that will be true once the CSS file has been unloaded successfully or otherwise false.
  */
	this.unloadCSS = function (href) {
		delete promises[href];
		var docHead = document.head;
		if (docHead) {
			var targetCss = docHead.querySelector('[href="' + href + '"]');
			if (targetCss) {
				targetCss.remove();
				return true;
			}
		}
		return false;
	};
}]).name;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angularLoad = __webpack_require__(0);

var _angularLoad2 = _interopRequireDefault(_angularLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angularLoad2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ]);
});