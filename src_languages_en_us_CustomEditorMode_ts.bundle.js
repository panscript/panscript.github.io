"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_en_us_CustomEditorMode_ts"],{

/***/ "./src/languages/en_us/CustomEditorMode.ts":
/*!*************************************************!*\
  !*** ./src/languages/en_us/CustomEditorMode.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModeFactory": () => (/* binding */ ModeFactory)
/* harmony export */ });
/* harmony import */ var _common_CommonEditorMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/CommonEditorMode */ "./src/languages/common/CommonEditorMode.ts");
/* harmony import */ var _CustomLocalizedStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomLocalizedStrings */ "./src/languages/en_us/CustomLocalizedStrings.ts");


var localizedStrings = new _CustomLocalizedStrings__WEBPACK_IMPORTED_MODULE_1__.CustomLocalizedStrings();
var modeOptions = {
  reservedWordsToStyles: _common_CommonEditorMode__WEBPACK_IMPORTED_MODULE_0__.makeReservedWordsToStyles(localizedStrings),
  bracketRegExp: new RegExp("[" + _common_CommonEditorMode__WEBPACK_IMPORTED_MODULE_0__.escapeRegExpChars("{}[]()") + "]"),
  operatorRegExp: new RegExp("[" + _common_CommonEditorMode__WEBPACK_IMPORTED_MODULE_0__.escapeRegExpChars("=><!&|+-*/^%.") + "]"),
  decimalNumberRegExp: new RegExp("(?:(?:\\d+\\.?)|(?:\\d*\\.\\d+))(?:e[+-]?\\d+)?", "i"),
  hexNumberRegExp: new RegExp("0x[0-9a-f]+", "i"),
  binaryNumberRegExp: new RegExp("0b[01]+", "i"),
  identifierRegExp: new RegExp("[a-z_][a-z0-9_]*", "i")
};
var ModeFactory = function ModeFactory() {
  return _common_CommonEditorMode__WEBPACK_IMPORTED_MODULE_0__.makeModeFactory(modeOptions);
};

/***/ }),

/***/ "./src/languages/en_us/CustomLocalizedStrings.ts":
/*!*******************************************************!*\
  !*** ./src/languages/en_us/CustomLocalizedStrings.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomLocalizedStrings": () => (/* binding */ CustomLocalizedStrings)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _common_CommonLocalizedStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/CommonLocalizedStrings */ "./src/languages/common/CommonLocalizedStrings.ts");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var CustomLocalizedStrings = /*#__PURE__*/function (_CommonLocalizedStrin) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomLocalizedStrings, _CommonLocalizedStrin);

  var _super = _createSuper(CustomLocalizedStrings);

  function CustomLocalizedStrings() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomLocalizedStrings);

    return _super.apply(this, arguments);
  }

  return CustomLocalizedStrings;
}(_common_CommonLocalizedStrings__WEBPACK_IMPORTED_MODULE_4__.CommonLocalizedStrings);

/***/ })

}]);