"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_en_us_code_samples_break_continue_en_us_pan"],{

/***/ "./src/languages/en_us/code_samples/break_continue.en_us.pan":
/*!*******************************************************************!*\
  !*** ./src/languages/en_us/code_samples/break_continue.en_us.pan ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nThere are at least three ways to interrupt loops.\r\n\r\nBreak exits out of the loop and execution resumes after it.\r\nContinue skips the current iteration, but stays in the loop.\r\n\r\nWhen inside a function, you can also stop a loop using\r\na Return statement (more on this later).\r\n\r\n*/\r\n\r\nwrite(\"Loop start\")\r\n\r\nnumber i = 0\r\nforever\r\n\ti += 1\r\n\r\n\t// Stop the loop after 10 iterations\r\n\tif i > 10\r\n\t\tbreak\r\n\tend\r\n\r\n\t// Skip multiples of three\r\n\tif i % 3 == 0\r\n\t\tcontinue\r\n\tend\r\n\r\n\twrite(i)\r\nend\r\n\r\nwrite(\"Loop end\")");

/***/ })

}]);