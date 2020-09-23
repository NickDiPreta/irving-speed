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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/upload-lease/lease.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/upload-lease/lease.js":
/*!*************************************!*\
  !*** ./pages/upload-lease/lease.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dropzone */ \"react-dropzone\");\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_upload_lease_lease_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/upload-lease/lease.module.css */ \"./styles/upload-lease/lease.module.css\");\n/* harmony import */ var _styles_upload_lease_lease_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_upload_lease_lease_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/jackiedong/Documents/perch/perchcredit.github.io/perch/packages/landingpage/pages/upload-lease/lease.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst lease = props => {\n  const {\n    acceptedFiles,\n    getRootProps,\n    getInputProps\n  } = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_1__[\"useDropzone\"])();\n  const files = acceptedFiles.map(file => __jsx(\"li\", {\n    key: file.path,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, file.path, \" - \", file.size, \" bytes\"));\n\n  const uploadFiles = async () => {\n    for (let i = 0; i < acceptedFiles.length; i++) {\n      const formData = new FormData();\n      const file = acceptedFiles[i];\n      formData.append(\"file\", file);\n      const {\n        status,\n        statusText\n      } = await fetch(\"/api/upload-lease\", {\n        // content-type header should not be specified!\n        method: \"POST\",\n        body: formData\n      });\n      console.log({\n        status,\n        statusText\n      });\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_upload_lease_lease_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", _extends({}, getRootProps({\n    className: `${_styles_upload_lease_lease_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dropzone}`\n  }), {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", _extends({}, getInputProps(), {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })), __jsx(\"p\", {\n    className: _styles_upload_lease_lease_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.text,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Drag 'n' drop some files here, or click to select files\")), __jsx(\"aside\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"Files\"), __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, files)), __jsx(\"button\", {\n    onClick: uploadFiles,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, \"Submit\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lease);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91cGxvYWQtbGVhc2UvbGVhc2UuanM/NmM2NyJdLCJuYW1lcyI6WyJsZWFzZSIsInByb3BzIiwiYWNjZXB0ZWRGaWxlcyIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJ1c2VEcm9wem9uZSIsImZpbGVzIiwibWFwIiwiZmlsZSIsInBhdGgiLCJzaXplIiwidXBsb2FkRmlsZXMiLCJpIiwibGVuZ3RoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwibGVhc2VTdHlsZXMiLCJjb250YWluZXIiLCJjbGFzc05hbWUiLCJkcm9wem9uZSIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBSUMsS0FBRCxJQUFXO0FBQ3ZCLFFBQU07QUFBRUMsaUJBQUY7QUFBaUJDLGdCQUFqQjtBQUErQkM7QUFBL0IsTUFBaURDLGtFQUFXLEVBQWxFO0FBRUEsUUFBTUMsS0FBSyxHQUFHSixhQUFhLENBQUNLLEdBQWQsQ0FBbUJDLElBQUQsSUFDOUI7QUFBSSxPQUFHLEVBQUVBLElBQUksQ0FBQ0MsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELElBQUksQ0FBQ0MsSUFEUixTQUNpQkQsSUFBSSxDQUFDRSxJQUR0QixXQURZLENBQWQ7O0FBTUEsUUFBTUMsV0FBVyxHQUFHLFlBQVk7QUFDOUIsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVixhQUFhLENBQUNXLE1BQWxDLEVBQTBDRCxDQUFDLEVBQTNDLEVBQStDO0FBQzdDLFlBQU1FLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0FBQ0EsWUFBTVAsSUFBSSxHQUFHTixhQUFhLENBQUNVLENBQUQsQ0FBMUI7QUFDQUUsY0FBUSxDQUFDRSxNQUFULENBQWdCLE1BQWhCLEVBQXdCUixJQUF4QjtBQUNBLFlBQU07QUFBRVMsY0FBRjtBQUFVQztBQUFWLFVBQXlCLE1BQU1DLEtBQUssQ0FBQyxtQkFBRCxFQUFzQjtBQUM5RDtBQUNBQyxjQUFNLEVBQUUsTUFGc0Q7QUFHOURDLFlBQUksRUFBRVA7QUFId0QsT0FBdEIsQ0FBMUM7QUFLQVEsYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRU4sY0FBRjtBQUFVQztBQUFWLE9BQVo7QUFDRDtBQUNGLEdBWkQ7O0FBY0EsU0FDRTtBQUFLLGFBQVMsRUFBRU0sNEVBQVcsQ0FBQ0MsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBCQUFTdEIsWUFBWSxDQUFDO0FBQUV1QixhQUFTLEVBQUcsR0FBRUYsNEVBQVcsQ0FBQ0csUUFBUztBQUFyQyxHQUFELENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRSw0QkFBV3ZCLGFBQWEsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLEVBRUU7QUFBRyxhQUFTLEVBQUVvQiw0RUFBVyxDQUFDSSxJQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtEQUZGLENBREYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLdEIsS0FBTCxDQUZGLENBUEYsRUFXRTtBQUFRLFdBQU8sRUFBRUssV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLENBREY7QUFlRCxDQXRDRDs7QUF3Q2VYLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdXBsb2FkLWxlYXNlL2xlYXNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcbmltcG9ydCBsZWFzZVN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3VwbG9hZC1sZWFzZS9sZWFzZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IGxlYXNlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYWNjZXB0ZWRGaWxlcywgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzIH0gPSB1c2VEcm9wem9uZSgpO1xuXG4gIGNvbnN0IGZpbGVzID0gYWNjZXB0ZWRGaWxlcy5tYXAoKGZpbGUpID0+IChcbiAgICA8bGkga2V5PXtmaWxlLnBhdGh9PlxuICAgICAge2ZpbGUucGF0aH0gLSB7ZmlsZS5zaXplfSBieXRlc1xuICAgIDwvbGk+XG4gICkpO1xuXG4gIGNvbnN0IHVwbG9hZEZpbGVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXB0ZWRGaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGNvbnN0IGZpbGUgPSBhY2NlcHRlZEZpbGVzW2ldO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBzdGF0dXNUZXh0IH0gPSBhd2FpdCBmZXRjaChcIi9hcGkvdXBsb2FkLWxlYXNlXCIsIHtcbiAgICAgICAgLy8gY29udGVudC10eXBlIGhlYWRlciBzaG91bGQgbm90IGJlIHNwZWNpZmllZCFcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHsgc3RhdHVzLCBzdGF0dXNUZXh0IH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtsZWFzZVN0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKHsgY2xhc3NOYW1lOiBgJHtsZWFzZVN0eWxlcy5kcm9wem9uZX1gIH0pfT5cbiAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17bGVhc2VTdHlsZXMudGV4dH0+XG4gICAgICAgICAgRHJhZyAnbicgZHJvcCBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlc1xuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhc2lkZT5cbiAgICAgICAgPGgyPkZpbGVzPC9oMj5cbiAgICAgICAgPHVsPntmaWxlc308L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICAgIDxidXR0b24gb25DbGljaz17dXBsb2FkRmlsZXN9PlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbGVhc2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/upload-lease/lease.js\n");

/***/ }),

/***/ "./styles/upload-lease/lease.module.css":
/*!**********************************************!*\
  !*** ./styles/upload-lease/lease.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"lease_container__43rUd\",\n\t\"text\": \"lease_text__21QV3\",\n\t\"dropzone\": \"lease_dropzone__2zFlN\",\n\t\"disabled\": \"lease_disabled__2lULz\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvdXBsb2FkLWxlYXNlL2xlYXNlLm1vZHVsZS5jc3M/ZTMwNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy91cGxvYWQtbGVhc2UvbGVhc2UubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImxlYXNlX2NvbnRhaW5lcl9fNDNyVWRcIixcblx0XCJ0ZXh0XCI6IFwibGVhc2VfdGV4dF9fMjFRVjNcIixcblx0XCJkcm9wem9uZVwiOiBcImxlYXNlX2Ryb3B6b25lX18yekZsTlwiLFxuXHRcImRpc2FibGVkXCI6IFwibGVhc2VfZGlzYWJsZWRfXzJsVUx6XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/upload-lease/lease.module.css\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dropzone":
/*!*********************************!*\
  !*** external "react-dropzone" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dropzone\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kcm9wem9uZVwiP2ZkZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtZHJvcHpvbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kcm9wem9uZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dropzone\n");

/***/ })

/******/ });