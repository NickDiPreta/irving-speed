module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/upload-lease.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/init-middleware.js":
/*!********************************!*\
  !*** ./lib/init-middleware.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initMiddleware; });\n// Helper method to wait for a middleware to execute before continuing\n// And to throw an error when an error happens in a middleware\nfunction initMiddleware(middleware) {\n  return (req, res) => new Promise((resolve, reject) => {\n    middleware(req, res, result => {\n      if (result instanceof Error) {\n        return reject(result);\n      }\n\n      return resolve(result);\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvaW5pdC1taWRkbGV3YXJlLmpzPzA0NTciXSwibmFtZXMiOlsiaW5pdE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDZSxTQUFTQSxjQUFULENBQXdCQyxVQUF4QixFQUFvQztBQUNqRCxTQUFPLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUNMLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDL0JMLGNBQVUsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVlJLE1BQUQsSUFBWTtBQUMvQixVQUFJQSxNQUFNLFlBQVlDLEtBQXRCLEVBQTZCO0FBQzNCLGVBQU9GLE1BQU0sQ0FBQ0MsTUFBRCxDQUFiO0FBQ0Q7O0FBQ0QsYUFBT0YsT0FBTyxDQUFDRSxNQUFELENBQWQ7QUFDRCxLQUxTLENBQVY7QUFNRCxHQVBELENBREY7QUFTRCIsImZpbGUiOiIuL2xpYi9pbml0LW1pZGRsZXdhcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWxwZXIgbWV0aG9kIHRvIHdhaXQgZm9yIGEgbWlkZGxld2FyZSB0byBleGVjdXRlIGJlZm9yZSBjb250aW51aW5nXG4vLyBBbmQgdG8gdGhyb3cgYW4gZXJyb3Igd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluIGEgbWlkZGxld2FyZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1pZGRsZXdhcmUobWlkZGxld2FyZSkge1xuICByZXR1cm4gKHJlcSwgcmVzKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG1pZGRsZXdhcmUocmVxLCByZXMsIChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/init-middleware.js\n");

/***/ }),

/***/ "./middlewares/corsMiddleware.js":
/*!***************************************!*\
  !*** ./middlewares/corsMiddleware.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/init-middleware */ \"./lib/init-middleware.js\");\n\n // Initialize the cors middleware\n\nconst cors = Object(_lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cors__WEBPACK_IMPORTED_MODULE_0___default()({\n  // Only allow requests with GET, POST and PUT\n  methods: [\"GET\", \"POST\", \"PUT\"]\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res, next) => {\n  const response = await cors(req, res);\n\n  if (response instanceof Error) {\n    throw new Error(\"Unable to initialize cors\");\n  }\n\n  return next();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlcy9jb3JzTWlkZGxld2FyZS5qcz9jZWRlIl0sIm5hbWVzIjpbImNvcnMiLCJpbml0TWlkZGxld2FyZSIsIkNvcnMiLCJtZXRob2RzIiwicmVxIiwicmVzIiwibmV4dCIsInJlc3BvbnNlIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7QUFDQSxNQUFNQSxJQUFJLEdBQUdDLG9FQUFjLENBQ3pCQywyQ0FBSSxDQUFDO0FBQ0g7QUFDQUMsU0FBTyxFQUFFLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsS0FBaEI7QUFGTixDQUFELENBRHFCLENBQTNCO0FBT2Usc0VBQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDdkMsUUFBTUMsUUFBUSxHQUFHLE1BQU1QLElBQUksQ0FBQ0ksR0FBRCxFQUFNQyxHQUFOLENBQTNCOztBQUVBLE1BQUlFLFFBQVEsWUFBWUMsS0FBeEIsRUFBK0I7QUFDN0IsVUFBTSxJQUFJQSxLQUFKLENBQVUsMkJBQVYsQ0FBTjtBQUNEOztBQUNELFNBQU9GLElBQUksRUFBWDtBQUNELENBUEQiLCJmaWxlIjoiLi9taWRkbGV3YXJlcy9jb3JzTWlkZGxld2FyZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgaW5pdE1pZGRsZXdhcmUgZnJvbSBcIi4uL2xpYi9pbml0LW1pZGRsZXdhcmVcIjtcblxuLy8gSW5pdGlhbGl6ZSB0aGUgY29ycyBtaWRkbGV3YXJlXG5jb25zdCBjb3JzID0gaW5pdE1pZGRsZXdhcmUoXG4gIENvcnMoe1xuICAgIC8vIE9ubHkgYWxsb3cgcmVxdWVzdHMgd2l0aCBHRVQsIFBPU1QgYW5kIFBVVFxuICAgIG1ldGhvZHM6IFtcIkdFVFwiLCBcIlBPU1RcIiwgXCJQVVRcIl0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb3JzKHJlcSwgcmVzKTtcblxuICBpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBpbml0aWFsaXplIGNvcnNcIik7XG4gIH1cbiAgcmV0dXJuIG5leHQoKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./middlewares/corsMiddleware.js\n");

/***/ }),

/***/ "./middlewares/middleware.js":
/*!***********************************!*\
  !*** ./middlewares/middleware.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _corsMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./corsMiddleware */ \"./middlewares/corsMiddleware.js\");\n\n\nconst middleware = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();\nmiddleware.use(_corsMiddleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (middleware);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlcy9taWRkbGV3YXJlLmpzPzJmNmEiXSwibmFtZXMiOlsibWlkZGxld2FyZSIsIm5leHRDb25uZWN0IiwidXNlIiwiY29yc01pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLFVBQVUsR0FBR0MsbURBQVcsRUFBOUI7QUFFQUQsVUFBVSxDQUFDRSxHQUFYLENBQWVDLHVEQUFmO0FBRWVILHlFQUFmIiwiZmlsZSI6Ii4vbWlkZGxld2FyZXMvbWlkZGxld2FyZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tIFwibmV4dC1jb25uZWN0XCI7XG5pbXBvcnQgY29yc01pZGRsZXdhcmUgZnJvbSBcIi4vY29yc01pZGRsZXdhcmVcIjtcblxuY29uc3QgbWlkZGxld2FyZSA9IG5leHRDb25uZWN0KCk7XG5cbm1pZGRsZXdhcmUudXNlKGNvcnNNaWRkbGV3YXJlKTtcblxuZXhwb3J0IGRlZmF1bHQgbWlkZGxld2FyZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./middlewares/middleware.js\n");

/***/ }),

/***/ "./pages/api/upload-lease.js":
/*!***********************************!*\
  !*** ./pages/api/upload-lease.js ***!
  \***********************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middlewares_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middlewares/middleware */ \"./middlewares/middleware.js\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst storage = multer__WEBPACK_IMPORTED_MODULE_2___default.a.memoryStorage();\nconst upload = multer__WEBPACK_IMPORTED_MODULE_2___default()({\n  storage: storage\n});\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();\nhandler.use(_middlewares_middleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nhandler.post(upload.single(\"file\"), async (req, res) => {\n  const signedUrl = \"https://wellick-lease-image-s3-stage.s3.amazonaws.com/lease-image-1-1600846125437?AWSAccessKeyId=AKIAWQRXSB72EUDRGGZB&Expires=1600849125&Signature=3EL9Qo2pIKMYHr5vL4g5T9rQ7sM%3D\";\n  let {\n    buffer\n  } = req.file;\n  let response;\n\n  if (buffer) {\n    response = await fetch(signedUrl, {\n      method: \"PUT\",\n      body: buffer\n    });\n  } else {\n    res.status(500).json({\n      statusText: \"No image selected\"\n    });\n    return;\n  }\n\n  console.log(response);\n  res.status(response.status).json(response);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXBsb2FkLWxlYXNlLmpzP2FiOTMiXSwibmFtZXMiOlsic3RvcmFnZSIsIm11bHRlciIsIm1lbW9yeVN0b3JhZ2UiLCJ1cGxvYWQiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwiaGFuZGxlciIsIm5leHRDb25uZWN0IiwidXNlIiwibWlkZGxld2FyZSIsInBvc3QiLCJzaW5nbGUiLCJyZXEiLCJyZXMiLCJzaWduZWRVcmwiLCJidWZmZXIiLCJmaWxlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwic3RhdHVzVGV4dCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsT0FBTyxHQUFHQyw2Q0FBTSxDQUFDQyxhQUFQLEVBQWhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRiw2Q0FBTSxDQUFDO0FBQUVELFNBQU8sRUFBRUE7QUFBWCxDQUFELENBQXJCO0FBRU8sTUFBTUksTUFBTSxHQUFHO0FBQ3BCQyxLQUFHLEVBQUU7QUFDSEMsY0FBVSxFQUFFO0FBRFQ7QUFEZSxDQUFmO0FBTVAsTUFBTUMsT0FBTyxHQUFHQyxtREFBVyxFQUEzQjtBQUNBRCxPQUFPLENBQUNFLEdBQVIsQ0FBWUMsK0RBQVo7QUFFQUgsT0FBTyxDQUFDSSxJQUFSLENBQWFSLE1BQU0sQ0FBQ1MsTUFBUCxDQUFjLE1BQWQsQ0FBYixFQUFvQyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDdEQsUUFBTUMsU0FBUyxHQUNiLG1MQURGO0FBRUEsTUFBSTtBQUFFQztBQUFGLE1BQWFILEdBQUcsQ0FBQ0ksSUFBckI7QUFFQSxNQUFJQyxRQUFKOztBQUNBLE1BQUlGLE1BQUosRUFBWTtBQUNWRSxZQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSixTQUFELEVBQVk7QUFDaENLLFlBQU0sRUFBRSxLQUR3QjtBQUVoQ0MsVUFBSSxFQUFFTDtBQUYwQixLQUFaLENBQXRCO0FBSUQsR0FMRCxNQUtPO0FBQ0xGLE9BQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGdCQUFVLEVBQUU7QUFBZCxLQUFyQjtBQUNBO0FBQ0Q7O0FBQ0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixRQUFaO0FBQ0FKLEtBQUcsQ0FBQ1EsTUFBSixDQUFXSixRQUFRLENBQUNJLE1BQXBCLEVBQTRCQyxJQUE1QixDQUFpQ0wsUUFBakM7QUFDRCxDQWpCRDtBQW1CZVgsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXBsb2FkLWxlYXNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gXCJuZXh0LWNvbm5lY3RcIjtcbmltcG9ydCBtaWRkbGV3YXJlIGZyb20gXCIuLi8uLi9taWRkbGV3YXJlcy9taWRkbGV3YXJlXCI7XG5pbXBvcnQgbXVsdGVyIGZyb20gXCJtdWx0ZXJcIjtcbmNvbnN0IHN0b3JhZ2UgPSBtdWx0ZXIubWVtb3J5U3RvcmFnZSgpO1xuY29uc3QgdXBsb2FkID0gbXVsdGVyKHsgc3RvcmFnZTogc3RvcmFnZSB9KTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsXG4gIH0sXG59O1xuXG5jb25zdCBoYW5kbGVyID0gbmV4dENvbm5lY3QoKTtcbmhhbmRsZXIudXNlKG1pZGRsZXdhcmUpO1xuXG5oYW5kbGVyLnBvc3QodXBsb2FkLnNpbmdsZShcImZpbGVcIiksIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBzaWduZWRVcmwgPVxuICAgIFwiaHR0cHM6Ly93ZWxsaWNrLWxlYXNlLWltYWdlLXMzLXN0YWdlLnMzLmFtYXpvbmF3cy5jb20vbGVhc2UtaW1hZ2UtMS0xNjAwODQ2MTI1NDM3P0FXU0FjY2Vzc0tleUlkPUFLSUFXUVJYU0I3MkVVRFJHR1pCJkV4cGlyZXM9MTYwMDg0OTEyNSZTaWduYXR1cmU9M0VMOVFvMnBJS01ZSHI1dkw0ZzVUOXJRN3NNJTNEXCI7XG4gIGxldCB7IGJ1ZmZlciB9ID0gcmVxLmZpbGU7XG5cbiAgbGV0IHJlc3BvbnNlO1xuICBpZiAoYnVmZmVyKSB7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzaWduZWRVcmwsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGJvZHk6IGJ1ZmZlcixcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN0YXR1c1RleHQ6IFwiTm8gaW1hZ2Ugc2VsZWN0ZWRcIiB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1cykuanNvbihyZXNwb25zZSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/upload-lease.js\n");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCI/N2U5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cors\n");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtdWx0ZXJcIj9hNzA0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im11bHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm11bHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///multer\n");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-connect\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIj9lYTQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtY29ubmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-connect\n");

/***/ })

/******/ });