"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_en_us_code_samples_console_functions_en_us_pan"],{

/***/ "./src/languages/en_us/code_samples/console_functions.en_us.pan":
/*!**********************************************************************!*\
  !*** ./src/languages/en_us/code_samples/console_functions.en_us.pan ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// Console functions are functions that interact with the output console.\r\n\r\n/*\r\n\twrite(x)\r\n\tWrites a value x of any type to the console after converting it to text.\r\n\tThe cursor moves to the next line.\r\n*/\r\nwrite(\">>> write(x):\")\r\nwrite(\"This is a line\")\r\nwrite(\"This is another line\")\r\nnew_line()\r\n\r\n\r\n/*\r\n\twrite_inline(x)\r\n\tWrites a value x of any type to the console after converting it to text.\r\n\tThe cursor remains in the same line.\r\n*/\r\nwrite(\">>> write_inline(x):\")\r\nwrite_inline(\"This is \")\r\nwrite_inline(\"a single line \")\r\nwrite_inline(\"and here comes a line break: \\r\\n\")\r\nnew_line()\r\n\r\n\r\n/*\r\n\tnew_line()\r\n\tWrites an empty line to the console.\r\n\tEquivalent to writing the CRLF control character sequence: \\r\\n\r\n*/\r\nwrite(\">>> new_line():\")\r\nnew_line()\r\nwrite_inline(\"\\r\\n\")\r\nnew_line()");

/***/ })

}]);