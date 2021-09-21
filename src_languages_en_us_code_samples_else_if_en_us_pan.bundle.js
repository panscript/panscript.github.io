"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_en_us_code_samples_else_if_en_us_pan"],{

/***/ "./src/languages/en_us/code_samples/else_if.en_us.pan":
/*!************************************************************!*\
  !*** ./src/languages/en_us/code_samples/else_if.en_us.pan ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nIf statements also allow one or more optional Else-If blocks.\r\nThe code in the Else-If block runs if its condition is true\r\nand all previous conditions were false.\r\n\r\nWith an Else-If block, the If statement may be declared as:\r\nif first_condition\r\n\t// code that runs if first_condition is true\r\nelse if second_condition\r\n\t// code that runs if first_condition is false\r\n\t// and second_condition is true\r\nend\r\n\r\nOr with multiple Else-If blocks, and also an Else block:\r\nif first_condition\r\n\t// code that runs if first_condition is true\r\nelse if second_condition\r\n\t// code that runs if first_condition is false\r\n\t// and second_condition is true\r\nelse if third_condition\r\n\t// code that runs if first_condition is false\r\n\t// and second_condition is false\r\n\t// and third_condition is true\r\nelse\r\n\t// code that runs if no condition was true\r\nend\r\n\r\n*/\r\n\r\n// The example below simulates a six-sided die\r\n// and writes a message based on the value rolled\r\n\r\n// Notice the second parameter is the limit + 1\r\nnumber roll = random_integer(1, 6+1)\r\n\r\nwrite(roll)\r\n\r\nif roll == 6\r\n\twrite(\"Great roll!\")\r\nelse if roll <= 2\r\n\twrite(\"Bad roll!\")\r\nelse\r\n\twrite(\"OK roll\")\r\nend\r\n\r\n// Run this example multiple times to get different results");

/***/ })

}]);