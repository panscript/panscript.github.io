"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_en_us_code_samples_else_en_us_pan"],{

/***/ "./src/languages/en_us/code_samples/else.en_us.pan":
/*!*********************************************************!*\
  !*** ./src/languages/en_us/code_samples/else.en_us.pan ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nIf statements allow an optional Else block.\r\nThe code in the Else block runs if the condition is false.\r\n\r\nWith an Else block, the If statement is declared as:\r\nif condition\r\n\t// code that runs if the condition is true\r\nelse\r\n\t// code that runs if the condition is false\r\nend\r\n\r\n*/\r\n\r\n// The example below simulates a six-sided die\r\n// and writes a message based on the value rolled\r\n\r\n// Notice the second parameter is the limit + 1\r\nnumber roll = random_integer(1, 6+1)\r\n\r\nwrite(roll)\r\n\r\nif roll >= 5\r\n\twrite(\"Great roll!\")\r\nelse\r\n\twrite(\"OK roll\")\r\nend\r\n\r\n// Run this example multiple times to get different results");

/***/ })

}]);