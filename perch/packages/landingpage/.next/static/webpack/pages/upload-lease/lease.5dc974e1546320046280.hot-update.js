webpackHotUpdate_N_E("pages/upload-lease/lease",{

/***/ "./pages/upload-lease/lease.js":
/*!*************************************!*\
  !*** ./pages/upload-lease/lease.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\n/* harmony import */ var _styles_upload_lease_lease_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/upload-lease/lease.module.css */ \"./styles/upload-lease/lease.module.css\");\n/* harmony import */ var _styles_upload_lease_lease_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_upload_lease_lease_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jackiedong/Documents/perch/perchcredit.github.io/perch/packages/landingpage/pages/upload-lease/lease.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\nvar lease = function lease(props) {\n  _s();\n\n  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_4__[\"useDropzone\"])(),\n      acceptedFiles = _useDropzone.acceptedFiles,\n      getRootProps = _useDropzone.getRootProps,\n      getInputProps = _useDropzone.getInputProps;\n\n  var files = acceptedFiles.map(function (file) {\n    return __jsx(\"li\", {\n      key: file.path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 5\n      }\n    }, file.path, \" - \", file.size, \" bytes\");\n  });\n\n  var uploadFiles = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var i, formData, file, _yield$fetch, status, statusText;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              i = 0;\n\n            case 1:\n              if (!(i < acceptedFiles.length)) {\n                _context.next = 14;\n                break;\n              }\n\n              formData = new FormData();\n              file = acceptedFiles[i];\n              formData.append(\"file\", file);\n              _context.next = 7;\n              return fetch(\"/api/upload-lease\", {\n                // content-type header should not be specified!\n                method: \"POST\",\n                body: formData\n              });\n\n            case 7:\n              _yield$fetch = _context.sent;\n              status = _yield$fetch.status;\n              statusText = _yield$fetch.statusText;\n              console.log({\n                status: status,\n                statusText: statusText\n              });\n\n            case 11:\n              i++;\n              _context.next = 1;\n              break;\n\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function uploadFiles() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    className: _styles_upload_lease_lease_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getRootProps({\n    className: \"\".concat(_styles_upload_lease_lease_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.dropzone)\n  }), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getInputProps(), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })), __jsx(\"p\", {\n    className: _styles_upload_lease_lease_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Drag 'n' drop some files here, or click to select files\")), __jsx(\"aside\", {\n    className: _styles_upload_lease_lease_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.aside,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"Files\"), __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, files)), __jsx(\"button\", {\n    onClick: uploadFiles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, \"Submit\"));\n};\n\n_s(lease, \"i3//039nbm0Ztc52IdZFoORkJa4=\", false, function () {\n  return [react_dropzone__WEBPACK_IMPORTED_MODULE_4__[\"useDropzone\"]];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lease);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXBsb2FkLWxlYXNlL2xlYXNlLmpzPzZjNjciXSwibmFtZXMiOlsibGVhc2UiLCJwcm9wcyIsInVzZURyb3B6b25lIiwiYWNjZXB0ZWRGaWxlcyIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJmaWxlcyIsIm1hcCIsImZpbGUiLCJwYXRoIiwic2l6ZSIsInVwbG9hZEZpbGVzIiwiaSIsImxlbmd0aCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiY29uc29sZSIsImxvZyIsImxlYXNlU3R5bGVzIiwiY29udGFpbmVyIiwiY2xhc3NOYW1lIiwiZHJvcHpvbmUiLCJ0ZXh0IiwiYXNpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxxQkFDZ0NDLGtFQUFXLEVBRDNDO0FBQUEsTUFDZkMsYUFEZSxnQkFDZkEsYUFEZTtBQUFBLE1BQ0FDLFlBREEsZ0JBQ0FBLFlBREE7QUFBQSxNQUNjQyxhQURkLGdCQUNjQSxhQURkOztBQUd2QixNQUFNQyxLQUFLLEdBQUdILGFBQWEsQ0FBQ0ksR0FBZCxDQUFrQixVQUFDQyxJQUFEO0FBQUEsV0FDOUI7QUFBSSxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELElBQUksQ0FBQ0MsSUFEUixTQUNpQkQsSUFBSSxDQUFDRSxJQUR0QixXQUQ4QjtBQUFBLEdBQWxCLENBQWQ7O0FBTUEsTUFBTUMsV0FBVztBQUFBLGdNQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVEMsZUFEUyxHQUNMLENBREs7O0FBQUE7QUFBQSxvQkFDRkEsQ0FBQyxHQUFHVCxhQUFhLENBQUNVLE1BRGhCO0FBQUE7QUFBQTtBQUFBOztBQUVWQyxzQkFGVSxHQUVDLElBQUlDLFFBQUosRUFGRDtBQUdWUCxrQkFIVSxHQUdITCxhQUFhLENBQUNTLENBQUQsQ0FIVjtBQUloQkUsc0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixNQUFoQixFQUF3QlIsSUFBeEI7QUFKZ0I7QUFBQSxxQkFLcUJTLEtBQUssQ0FBQyxtQkFBRCxFQUFzQjtBQUM5RDtBQUNBQyxzQkFBTSxFQUFFLE1BRnNEO0FBRzlEQyxvQkFBSSxFQUFFTDtBQUh3RCxlQUF0QixDQUwxQjs7QUFBQTtBQUFBO0FBS1JNLG9CQUxRLGdCQUtSQSxNQUxRO0FBS0FDLHdCQUxBLGdCQUtBQSxVQUxBO0FBVWhCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUgsc0JBQU0sRUFBTkEsTUFBRjtBQUFVQywwQkFBVSxFQUFWQTtBQUFWLGVBQVo7O0FBVmdCO0FBQ3dCVCxlQUFDLEVBRHpCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYRCxXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQWNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVhLDRFQUFXLENBQUNDLFNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxvR0FBU3JCLFlBQVksQ0FBQztBQUFFc0IsYUFBUyxZQUFLRiw0RUFBVyxDQUFDRyxRQUFqQjtBQUFYLEdBQUQsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLHNHQUFXdEIsYUFBYSxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsRUFFRTtBQUFHLGFBQVMsRUFBRW1CLDRFQUFXLENBQUNJLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0RBRkYsQ0FERixFQU9FO0FBQU8sYUFBUyxFQUFFSiw0RUFBVyxDQUFDSyxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLdkIsS0FBTCxDQUZGLENBUEYsRUFXRTtBQUFRLFdBQU8sRUFBRUssV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLENBREY7QUFlRCxDQXRDRDs7R0FBTVgsSztVQUNtREUsMEQ7OztBQXVDMUNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdXBsb2FkLWxlYXNlL2xlYXNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcbmltcG9ydCBsZWFzZVN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3VwbG9hZC1sZWFzZS9sZWFzZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IGxlYXNlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYWNjZXB0ZWRGaWxlcywgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzIH0gPSB1c2VEcm9wem9uZSgpO1xuXG4gIGNvbnN0IGZpbGVzID0gYWNjZXB0ZWRGaWxlcy5tYXAoKGZpbGUpID0+IChcbiAgICA8bGkga2V5PXtmaWxlLnBhdGh9PlxuICAgICAge2ZpbGUucGF0aH0gLSB7ZmlsZS5zaXplfSBieXRlc1xuICAgIDwvbGk+XG4gICkpO1xuXG4gIGNvbnN0IHVwbG9hZEZpbGVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXB0ZWRGaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGNvbnN0IGZpbGUgPSBhY2NlcHRlZEZpbGVzW2ldO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBzdGF0dXNUZXh0IH0gPSBhd2FpdCBmZXRjaChcIi9hcGkvdXBsb2FkLWxlYXNlXCIsIHtcbiAgICAgICAgLy8gY29udGVudC10eXBlIGhlYWRlciBzaG91bGQgbm90IGJlIHNwZWNpZmllZCFcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHsgc3RhdHVzLCBzdGF0dXNUZXh0IH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtsZWFzZVN0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKHsgY2xhc3NOYW1lOiBgJHtsZWFzZVN0eWxlcy5kcm9wem9uZX1gIH0pfT5cbiAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17bGVhc2VTdHlsZXMudGV4dH0+XG4gICAgICAgICAgRHJhZyAnbicgZHJvcCBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlc1xuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhc2lkZSBjbGFzc05hbWU9e2xlYXNlU3R5bGVzLmFzaWRlfT5cbiAgICAgICAgPGgyPkZpbGVzPC9oMj5cbiAgICAgICAgPHVsPntmaWxlc308L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICAgIDxidXR0b24gb25DbGljaz17dXBsb2FkRmlsZXN9PlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbGVhc2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/upload-lease/lease.js\n");

/***/ })

})